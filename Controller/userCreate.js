module.exports = (req, res) => {

    //console.log(req.sessions.registerError);

    res.render("register", {
        errors: req.flash('registerError'),
        data: req.flash('data')[0]
    })
}