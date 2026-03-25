module.exports = function (router) {

  var version = "v1";

  router.get('/' + version + '/test', function (req, res) {
    res.render(version + '/test', {})
  })

  router.post('/' + version + '/test', function (req, res) {
    res.redirect('/' + version + '/next-page')
  })

}
