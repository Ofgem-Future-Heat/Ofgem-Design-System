//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Design System Routes

// Components index page
router.get('/components', (req, res) => {
  res.render('components/index', {
    activePage: 'components'
  })
})

// Individual component pages
router.get('/components/alert', (req, res) => {
  res.render('components/alert', {
    activePage: 'alert'
  })
})

router.get('/components/button', (req, res) => {
  res.render('components/button', {
    activePage: 'button'
  })
})

router.get('/components/badge', (req, res) => {
  res.render('components/badge', {
    activePage: 'badge'
  })
})

router.get('/components/date-picker', (req, res) => {
  res.render('components/date-picker', {
    activePage: 'date-picker'
  })
})

router.get('/components/filter', (req, res) => {
  res.render('components/filter', {
    activePage: 'filter'
  })
})

router.get('/components/header', (req, res) => {
  res.render('components/header', {
    activePage: 'header'
  })
})

// Additional design system pages (placeholder routes)
router.get('/patterns', (req, res) => {
  res.render('patterns/index', {
    activePage: 'patterns'
  })
})

router.get('/pages', (req, res) => {
  res.render('pages/index', {
    activePage: 'pages'
  })
})

router.get('/content-style-guide', (req, res) => {
  res.render('guidance/content-style-guide', {
    activePage: 'content-style-guide'
  })
})

router.get('/accessibility', (req, res) => {
  res.render('guidance/accessibility', {
    activePage: 'accessibility'
  })
})

router.get('/prototyping', (req, res) => {
  res.render('guidance/prototyping', {
    activePage: 'prototyping'
  })
})

router.get('/benefits', (req, res) => {
  res.render('about/benefits', {
    activePage: 'benefits'
  })
})

router.get('/get-involved', (req, res) => {
  res.render('about/get-involved', {
    activePage: 'get-involved'
  })
})

router.get('/get-help', (req, res) => {
  res.render('about/get-help', {
    activePage: 'get-help'
  })
})

// Redirect old components page to new index
router.get('/components.html', (req, res) => {
  res.redirect('/components')
})
