const mongoose = require('mongoose')
const Article = require('./database/models/Article')

mongoose.connect('mongodb://localhost:27017/blog-test');

Article.findByIdAndUpdate("5f72fa34aab6d3194d6e25e3", {

    title: 'Avenger EndGame'
}, (error, post) => {
    console.log(error, post);

})

/*
Article.findById("5f72fa34aab6d3194d6e25e3", (error, articles) => {
    console.log(error, articles);

})

*/

/*
Article.find({

    intro: "test d'introduction",

}, (error, articles) => {
    console.log(error, articles);

})
*/

/*
Article.create({
        title: "SpiderMan",
        intro: "test d'introduction",
        content: "Critique sur le film spiderMan",
    }, (error, post) => {
        console.log(error, post);

    }

)
*/