const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
require('dotenv').config()
const app = express();
const bodyParser = require('body-parser');
//mogoose
mongoose.connect(process.env.MONGO_URI);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//express static
app.use(express.static('public'));

// post
const Post = require("./database/models/Article")

//route
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get("/", async(req, res) => {
    const posts = await Post.find({})
    console.log(posts);

    res.render("index", { posts })
})

app.get("/contact", function(req, res) {
    res.render("contact")
})

// Articles


app.get("/articles/:id", async(req, res) => {

    const article = await Post.findById(req.params.id)

    res.render("articles", { article })
})

app.get("/article/add", (req, res) => {
    res.render("article/add")
})


app.post("/articles/post", (req, res) => {

    Post.create(req.body, (error, post) => {
        res.redirect('/')
    })
    console.log(req.body);

})


app.post("/articles/post", (req, res) => {

    console.log(req.body);

    res.redirect('/')
})
app.listen(3000, function() {
    console.log("le server tourne sur le port 3000");
})