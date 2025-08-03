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
router.get('/components/profile', (req, res) => {
  res.render('components/profile', {
    activePage: 'profile'
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

router.get('/pages/bus', (req, res) => {
  res.render('pages/bus', {
    activePage: 'bus'
  })
})