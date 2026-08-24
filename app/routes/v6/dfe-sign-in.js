module.exports = function (router) {

  var version = "v6"

  function setLocalAuthority(req) {
    req.session.data['userType'] = 'localAuthority'
    delete req.session.data['singleHome']
    delete req.session.data['censusStatus']
  }

  function setSingleHome(req) {
    if (req.query.singleHome) {
      req.session.data['singleHome'] = req.query.singleHome
      delete req.session.data['userType']
      delete req.session.data['censusStatus']
    }
  }

  router.get('/' + version + '/emails/service-intro', function (req, res) {
    if (req.query.singleHome) {
      setSingleHome(req)
    } else if (req.query.userType == 'localAuthority') {
      setLocalAuthority(req)
    }
    res.render(version + '/emails/service-intro', {})
  })

  router.post('/' + version + '/emails/service-intro', function (req, res) {
    res.redirect('/' + version + '/start-now')
  })

  router.get('/' + version + '/start-now', function (req, res) {
    if (req.query.singleHome) {
      setSingleHome(req)
    } else if (req.query.userType == 'localAuthority') {
      setLocalAuthority(req)
    }
    res.render(version + '/start-now', {})
  })

  router.post('/' + version + '/start-now', function (req, res) {
    res.redirect('/' + version + '/sign-in')
  })

  router.get('/' + version + '/emails/update-email', function (req, res) {
    setSingleHome(req)
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
    if (req.session.data['userType'] == 'localAuthority') {
      delete req.session.data['singleHome']
      res.redirect('/' + version + '/compliance/census-details')
    } else if (req.session.data['singleHome'] == 'thinLine') {
      delete req.session.data['userType']
      res.redirect('/' + version + '/compliance/census-details')
    } else if (req.session.data['singleHome'] == 'combined') {
      delete req.session.data['userType']
      res.redirect('/' + version + '/single-combined-home')
    } else if (req.session.data['singleHome'] == 'priority') {
      delete req.session.data['userType']
      res.redirect('/' + version + '/single-priority-home')
    } else if (req.session.data['singleHome'] == 'nowNextLater') {
      delete req.session.data['userType']
      res.redirect('/' + version + '/single-now-next-later-home')
    } else if (req.session.data['singleHome'] == 'roleLed') {
      delete req.session.data['userType']
      res.redirect('/' + version + '/single-role-led-home')
    } else {
      res.redirect('/' + version + '/single-school')
    }
  })

}
