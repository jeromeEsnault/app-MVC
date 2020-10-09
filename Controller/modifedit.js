//recuperer les donnee souhaitez
const Article = require('../database/models/Article')
const fs = require('fs')
const path = require('path');

module.exports = async(req, res) => {
    console.log('Controller Form Edit Article')
        // query (req.params.id)
    const query = req.params.id
        // articleID est l'objet filtrer par la fonction de mongodb (Article.findById(query))
    const articleID = await Article.findById(query)
    console.log(articleID) // OK

    console.log(req.body) // OK

    // Si on a le fichier (image) 
    if (req.files) {
        console.log('J ai un fichier')
            // Image sera = à notre req.files (buffer, name, ...)
        const { image } = req.files // OK
            // Ici on declare notre chemin par default ou vont etre stocker nos nouvelle image
        const uploadFile = path.resolve('public/articles', image.name);

        // On vient stocker notre image 
        image.mv(uploadFile, (err) => {
            if (err) console.log(err)

            // On edite l'objet dans la base de donnée
            Article.findByIdAndUpdate(query, {
                title: req.body.title,
                content: req.body.content,
                author: req.body.author,
                image: `/articles/${image.name}`

            }, (err, article) => {
                if (err) console.log(err)
                console.log(article)
                    // Ici on viens supprimer l'ancienne image de notre arborescence
                fs.unlink('./public' + article.image, (err) => {
                    if (err) console.log(err)
                    res.redirect('/modifier/' + article._id)
                })
            })
        })

        // Si on a pas de fichier (image)
    } else {
        console.log('J ai pas de fichier')
            // Fonction mongodb pour editer notre objet (articleID) que l'on selectionne grace à query
        Article.findByIdAndUpdate(query, {
            title: req.body.title,
            content: req.body.content,
            author: req.body.author
                // Notre callback de gestion d'error
        }, (err) => {
            if (err) console.log(err)
            res.redirect('/modifier/' + query)
        })


    }

}