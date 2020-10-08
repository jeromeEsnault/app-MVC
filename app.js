const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fileupload = require('express-fileupload');
const expressSession = require('express-session');
const MongoStore = require('connect-mongo');
const connectFlash = require('connect-flash');
const { stripTags, limit } = require('./helpers/hbs');

// Controller
const createarticleController = require('./Controller/articleAdd');
const articlePostController = require('./Controller/articlePost');
const articleSingleController = require('./Controller/articleSingle');
const homePageController = require('./Controller/homePage');
const contactController = require('./Controller/contact');
const modifierArticle = require('./Controller/modifierarticle')
const deleteArticle = require('./Controller/deleteArticle')
const modifEditArticle = require('./Controller/modifedit')

//CONTROL user
const userCreateController = require('./Controller/userCreate');
const userRegistrerController = require('./Controller/userRegister');
const userLoginController = require('./Controller/userlogin');
const userLoginAuthController = require('./Controller/userloginAuth');
const userLagout = require('./Controller/userLagout');

require('dotenv').config()
const app = express();

//mogoose
mongoose.connect(process.env.MONGO_URI);
const mongoStore = MongoStore(expressSession);

app.use(connectFlash())

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
const redirectAuthSucess = require('./middleware/redirectionAuthSucess')

const Handlebars = require("handlebars");
const MomentHandler = require("handlebars.moment");
MomentHandler.registerHelpers(Handlebars);

//express static
app.use(express.static('public'));

//route
app.engine('handlebars', exphbs({
    helpers: {
        stripTags: stripTags,
        limit: limit
    },
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
app.use('*', (req, res, next) => {
    res.locals.user = req.session.userId;
    console.log(res.locals.user);
    next()
})


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
app.get("/modifier", modifierArticle)
app.get("/deleteArticle/:id", deleteArticle)
app.get("/modifier", modifEditArticle)

// Users
app.get('/user/create', redirectAuthSucess, userCreateController)
app.post('/user/register', redirectAuthSucess, userRegistrerController)
app.get('/user/login', redirectAuthSucess, userLoginController)
app.post('/user/loginAuth', redirectAuthSucess, userLoginAuthController)
app.get('/user/lagout', userLagout)

//contact
app.get("/contact", contactController)



app.use((req, res) => {
    res.render('error404')
})


app.listen(3000, function() {
    console.log("le server tourne sur le port 3000");
})