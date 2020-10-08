//recuperer les donnee souhaitez
const Article = require('../database/models/Article')
const fs = require('fs')
const path = require('path');

module.exports = (req, res) => {


    //recuperer les donne pour modification

    const article = await Article.findById(req.params.id)

    console.log(article);


    //function de modification 


    //validation des changement
}







/*module.exports = async(req, res) => {
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
    const { image } = req.files
    const uploadFile = path.resolve(__dirname, '..', 'public/articles', image.name);

    image.mv(uploadFile, (error) => {
        Post.create({
                ...req.body,
                image: `/articles/${image.name}`
            }

            , (error, post) => {
                res.redirect('/')
            })
    })

}*/