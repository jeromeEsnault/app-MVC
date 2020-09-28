const express = require('express');
const exphbs = require('express-handlebars');

const app = express();



//express static

app.use(express.static('public'));

//route

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get("/", function(req, res) {

    res.render("index")
})

app.get("/contact", function(req, res) {
    res.render("contact")
})

app.listen(3000, function() {
    console.log("le server tourne sur le port 3000");
})