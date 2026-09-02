module.exports = function (router) {

  var version = "v8"

  router.get('/' + version + '/emails/service-invite', function (req, res) {
    res.render(version + '/emails/service-invite', {})
  })

  router.post('/' + version + '/emails/service-invite', function (req, res) {
    res.redirect('/' + version + '/start')
  })

  router.get('/' + version + '/start', function (req, res) {
    res.render(version + '/start', {})
  })

  router.post('/' + version + '/start', function (req, res) {
    res.redirect('/' + version + '/sign-in')
  })

  router.get('/' + version + '/emails/update-email', function (req, res) {
    res.render(version + '/emails/update-email', {})
  })

  router.get('/' + version + '/sign-in', function (req, res) {
    res.render(version + '/sign-in', {})
  })

  router.post('/' + version + '/sign-in', function (req, res) {
    res.redirect('/' + version + '/password')
  })

  router.get('/' + version + '/password', function (req, res) {
    res.render(version + '/password', {})
  })

  router.post('/' + version + '/password', function (req, res) {
    res.redirect('/' + version + '/verify')
  })

  router.get('/' + version + '/verify', function (req, res) {
    res.render(version + '/verify', {})
  })

  router.post('/' + version + '/verify', function (req, res) {
    res.redirect('/' + version + '/mfa')
  })

  router.get('/' + version + '/mfa', function (req, res) {
    res.render(version + '/mfa', {})
  })

  router.post('/' + version + '/mfa', function (req, res) {
    if (req.session.data['userType'] == 'multiAcademyTrust') {
      res.redirect('/' + version + '/select-an-organisation')
    } else if (req.session.data['userType'] == 'singleSchool' || (req.session.data['userType'] == 'localAuthority')) {
      res.redirect('/' + version + '/compliance/census-details')
    } else if (req.session.data['aBTesting'] == 'thinLine') {
      res.redirect('/' + version + '/compliance/census-details')
    } else if (req.session.data['aBTesting'] == 'combined') {
      res.redirect('/' + version + '/single-combined-home')
    } else if (req.session.data['aBTesting'] == 'priority') {
      res.redirect('/' + version + '/single-priority-home')
    } else if (req.session.data['aBTesting'] == 'nowNextLater') {
      res.redirect('/' + version + '/single-now-next-later-home')
    } else if (req.session.data['aBTesting'] == 'roleLed') {
      res.redirect('/' + version + '/single-role-led-home')
    } else {
      res.redirect('/' + version + '/single-school')
    }
  })

  router.get('/' + version + '/select-an-organisation', function (req, res) {
    res.render(version + '/select-an-organisation', {})
  })

  router.post('/' + version + '/select-an-organisation', function (req, res) {
    if (req.session.data['organisation'] != 'Our Community Multi Academy Trust') {
      req.session.data['userType'] = 'singleSchool'
    }
    res.redirect('/' + version + '/compliance/census-details')
  })
}
