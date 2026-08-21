module.exports = function (router) {

  var version = "v7";

  router.get('/' + version + '/single-school', function (req, res) {
    if (req.session.data['singleHome'] == 'priority') {
      res.redirect('/' + version + '/single-priority-home')
    } else if (req.session.data['singleHome'] == 'nowNextLater'){
      res.redirect('/' + version + '/single-now-next-later-home')
    } else if (req.session.data['singleHome'] == 'roleLed'){
      res.redirect('/' + version + '/single-role-led-home')
    } else {
      res.redirect('/' + version + '/single-combined-home')
    }
  })

  router.post('/' + version + '/single-school', function (req, res) {
    if (req.session.data['singleHome'] == 'priority') {
      res.redirect('/' + version + '/single-priority-home')
    } else if (req.session.data['singleHome'] == 'nowNextLater'){
      res.redirect('/' + version + '/single-now-next-later-home')
    } else if (req.session.data['singleHome'] == 'roleLed'){
      res.redirect('/' + version + '/single-role-led-home')
    } else {
      res.redirect('/' + version + '/single-combined-home')
    }
  })

  router.get('/' + version + '/compliance/census-details', function (req, res) {
    res.render('/' + version + '/compliance/census-details', {})
  })

  router.post('/' + version + '/compliance/census-details', function (req, res) {
    req.session.data['censusStatus'] = 'DfE reviewing'

    if (req.session.data['userType'] == 'localAuthority') {
      res.redirect('/' + version + '/emails/local-authority-census-action-required')
    } else {
      res.redirect('/' + version + '/compliance/census-details')
    }
  })
}
