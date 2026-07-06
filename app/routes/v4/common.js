module.exports = function (router) {

  var version = "v4";

  router.get('/' + version + '/single-school', function (req, res) {
    if (req.session.data['singleHome'] == 'priority') {
      res.redirect('/' + version + '/single-priority-home')
    } else {
      res.redirect('/' + version + '/single-combined-home')
    }
  })

  router.post('/' + version + '/single-school', function (req, res) {
    if (req.session.data['singleHome'] == 'priority') {
      res.redirect('/' + version + '/single-priority-home')
    } else {
      res.redirect('/' + version + '/single-combined-home')
    }
  })

}
