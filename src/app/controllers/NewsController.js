
class NewsController
{
  index(req, res) {
    res.render('news/index')
  }
  
  show(req, res) {
    res.render('news/show')
  }
}

module.exports = new NewsController;