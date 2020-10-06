const User = require('../database/models/User')

module.exports = (req, res) => {
    User.create(
        req.body, (error, User) => {

            if (error) {
                const registerError = Object.keys(error.errors).map(key => error.errors[key].message);

                req.flash('registerError', registerError)
                req.flash('data', req.body)


                //console.log(Object.keys(error.errors).map(key => error.errors[key].message));
                //console.log(registerError);
                return res.redirect('/user/create')

            }


            res.redirect('/')
        }
    )
}