module.exports = function (router) {

  var version = "v4";

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
    if (req.session.data['singleHome'] == 'priority') {
      res.redirect('/' + version + '/single-priority-home')
    } else {
      res.redirect('/' + version + '/single-combined-home')
    }
  })

}
