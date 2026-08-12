module.exports = function (router) {
  
  var version = "v5";

  router.get('/' + version + '/emails/local-authority-census-open', function (req, res) {
    res.render(version + '/emails/local-authority-census-open', {})
  })

  router.post('/' + version + '/emails/local-authority-census-open', function (req, res) {
    delete req.session.data['censusStatus']
    res.redirect('/' + version + '/sign-in')
  })

  router.get('/' + version + '/emails/local-authority-census-action-required', function (req, res) {
    res.render(version + '/emails/local-authority-census-action-required', {})
  })

  router.post('/' + version + '/emails/local-authority-census-action-required', function (req, res) {
    req.session.data['censusStatus'] = 'actionRequired'
    res.redirect('/' + version + '/sign-in')
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
    res.redirect('/' + version + '/mfa')
  })

  router.get('/' + version + '/mfa', function (req, res) {
    res.render(version + '/mfa', {})
  })

  router.post('/' + version + '/mfa', function (req, res) {
    if (req.session.data['singleHome'] == 'thinLine') {
      delete req.session.data['censusStatus']
      res.redirect('/' + version + '/compliance/census-details')
    } else if (req.session.data['userType'] == 'localAuthority') {
      res.redirect('/' + version + '/compliance/census-details')
    } else {
      res.redirect('/' + version + '/single-school')
    }
  })

}
