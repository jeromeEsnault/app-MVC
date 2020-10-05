const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fileupload = require('express-fileupload');
const expressSession = require('express-session');
const MongoStore = require('connect-mongo');


// Controller
const createarticleController = require('./Controller/articleAdd');
const articlePostController = require('./Controller/articlePost');
const articleSingleController = require('./Controller/articleSingle');
const homePageController = require('./Controller/homePage');
const contactController = require('./Controller/contact');


//CONTROL GET ET POST
const userCreateController = require('./Controller/userCreate');
const userRegistrerController = require('./Controller/userRegister');
const userLoginController = require('./Controller/userlogin');
const userLoginAuthController = require('./Controller/userloginAuth');

require('dotenv').config()
const app = express();
//mogoose
mongoose.connect(process.env.MONGO_URI);
const mongoStore = MongoStore(expressSession);

app.use(expressSession({
    secret: 'securite',
    name: 'biscuit',
    saveUninitialized: true,
    resave: false,

    store: new mongoStore({ mongooseConnection: mongoose.connection })
}))







app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(fileupload())

const auth = require("./middleware/auth")


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
app.use("/articles/add", auth)

app.get("/", homePageController)
    // GET


// Articles
app.get("/articles/:id", auth, articleSingleController)
app.get("/article/add", createarticleController)
app.post("/articles/post", auth, articleValidPost, articlePostController)

// Users
app.get('/user/create', userCreateController)
app.post('/user/register', userRegistrerController)
app.get('/user/login', userLoginController)
app.post('/user/loginAuth', userLoginAuthController)

//contact
app.get("/contact", contactController)

//POST


app.listen(3000, function() {
    console.log("le server tourne sur le port 3000");
})