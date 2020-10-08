const Article = require('../database/models/Article')
const fs = require('fs')

module.exports = async(req, res) => {
    const q = req.params.id
    const article = await Article.findById(q)

    // Suppression du fichier (image)
    // https://flaviocopes.com/how-to-remove-file-node/
    fs.unlink('./public' + article.image, (err) => {
        if (err) console.log(err)
            // Suppression de l'object dans la DB
        Article.findByIdAndDelete(q, (err) => {
            if (err) console.log(err)
            else res.redirect('/')
        })
    })
}