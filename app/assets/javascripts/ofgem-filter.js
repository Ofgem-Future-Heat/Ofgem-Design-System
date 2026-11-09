;(function () {
  function initFilters () {
    document.querySelectorAll('[data-ofgem-filter]').forEach(function (filter) {
      if (filter.dataset.ofgemFilterInitialized) return
      filter.dataset.ofgemFilterInitialized = 'true'

      const textInput = filter.querySelector('input[type="text"]')
      const checkboxes = filter.querySelectorAll('input[type="checkbox"]')
      const selectedList = filter.querySelector('.ofgem-filter__selected-list')
      const noFiltersText = filter.querySelector('.ofgem-filter__no-selection')
      const clearButton = filter.querySelector('.ofgem-filter__clear')
      const applyButton = filter.querySelector('button[type="submit"]')
      let appliedFilters = []

      function render (restoreFocus) {
        selectedList.replaceChildren()
        const groups = new Map()

        appliedFilters.forEach(function (selection) {
          if (!groups.has(selection.group)) {
            const item = document.createElement('li')
            item.className = 'ofgem-filter__selected-item'
            const heading = document.createElement('p')
            heading.className = 'ofgem-filter__selected-type'
            heading.textContent = selection.group
            const pills = document.createElement('div')
            pills.className = 'ofgem-filter__selected-pills'
            item.append(heading, pills)
            selectedList.append(item)
            groups.set(selection.group, pills)
          }

          const pill = document.createElement('div')
          pill.className = 'ofgem-filter__selected-pill'
          const value = document.createElement('span')
          value.className = 'ofgem-filter__selected-value'
          value.textContent = selection.label
          const remove = document.createElement('button')
          remove.type = 'button'
          remove.className = 'ofgem-filter__remove'
          remove.textContent = '\u00d7'
          remove.setAttribute('aria-label', 'Remove ' + selection.label)
          remove.addEventListener('click', function () {
            if (selection.control.type === 'checkbox') {
              selection.control.checked = false
            } else {
              selection.control.value = ''
            }
            appliedFilters = appliedFilters.filter(function (candidate) {
              return candidate !== selection
            })
            render(true)
          })
          pill.append(value, remove)
          groups.get(selection.group).append(pill)
        })

        noFiltersText.hidden = appliedFilters.length > 0
        clearButton.hidden = appliedFilters.length === 0
        if (restoreFocus) {
          const nextRemove = selectedList.querySelector('button')
          ;(nextRemove || applyButton).focus()
        }
        filter.dispatchEvent(new CustomEvent('ofgem:filter', {
          bubbles: true,
          detail: {
            filters: appliedFilters.map(function (selection) {
              return { name: selection.control.name, value: selection.value }
            })
          }
        }))
      }

      filter.addEventListener('submit', function (event) {
        event.preventDefault()
        appliedFilters = []
        if (textInput.value.trim()) {
          appliedFilters.push({
            control: textInput,
            group: textInput.dataset.filterLabel,
            label: textInput.value.trim(),
            value: textInput.value.trim()
          })
        }
        checkboxes.forEach(function (checkbox) {
          if (checkbox.checked) {
            appliedFilters.push({
              control: checkbox,
              group: checkbox.closest('fieldset').dataset.filterLabel,
              label: checkbox.labels[0].textContent.trim(),
              value: checkbox.value
            })
          }
        })
        render(false)
      })

      clearButton.addEventListener('click', function () {
        textInput.value = ''
        checkboxes.forEach(function (checkbox) { checkbox.checked = false })
        appliedFilters = []
        render(true)
      })
    })
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFilters)
  } else {
    initFilters()
  }
})()