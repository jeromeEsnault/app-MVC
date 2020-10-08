// post
const Post = require("../database/models/Article")

module.exports = async(req, res) => {

    const posts = await Post.find({})
        //const postReversed = posts.reverse()

    // console.log(req.session);

    res.render("index", { posts: posts })
}