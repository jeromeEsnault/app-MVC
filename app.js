const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fileupload = require('express-fileupload');



// Controller
const createarticleController = require('./Controller/articleAdd');
const articlePostController = require('./Controller/articlePost');
const articleSingleController = require('./Controller/articleSingle');
const homePageController = require('./Controller/homePage');
const contactController = require('./Controller/contact');


//CONTROL GET ET POST
const userCreateController = require('./Controller/userCreate');
const userRegistrerController = require('./Controller/userRegister')

require('dotenv').config()
const app = express();


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(fileupload())

//mogoose
mongoose.connect(process.env.MONGO_URI);

const Handlebars = require("handlebars");
const MomentHandler = require("handlebars.moment");
MomentHandler.registerHelpers(Handlebars);

//express static
app.use(express.static('public'));

//route
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//middleware
const articleValidPost = require('./middleware/articleValidPost')
app.use("/articles/post", articleValidPost)

app.get("/", homePageController)
    // GET
    // Articles
app.get("/articles/:id", articleSingleController)
app.get("/article/add", createarticleController)
    // Users
app.get('/user/create', userCreateController)
app.post('/user/register',userRegistrerController)
    //contact
app.get("/contact", contactController)

//POST
app.post("/articles/post", articlePostController)

app.listen(3000, function() {
    console.log("le server tourne sur le port 3000");
})