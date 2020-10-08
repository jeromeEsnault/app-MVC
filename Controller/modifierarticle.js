const Article = require('../database/models/Article')

module.exports = async(req, res) => {

    const article = await Article.findById(req.params.id)
    res.render("modifier", { articles: article })
}