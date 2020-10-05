const bcrypt = require('bcrypt')
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }

})

UserSchema.pre('save', function(next) {
    const user = this

    bcrypt.hash(user.password, 10, (error, encryted) => {
        user.password = encryted
        next()
    })
})


module.exports = mongoose.model('User', UserSchema)