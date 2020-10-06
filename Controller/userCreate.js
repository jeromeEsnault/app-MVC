module.exports = (req, res) => {

    //console.log(req.sessions.registerError);

    res.render("register", {
        errors: req.flash('registerError')
    })
}