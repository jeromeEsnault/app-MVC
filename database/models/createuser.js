const mongoose = require('mongoose')

const ArticleSchema = new mongoose.Schema({

    name: String,
    email: String,
    password: String

})



module.exports = mongoose.model('User',UserSchema)