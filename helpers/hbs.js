module.exports = {

    stripTags: function(Input) {

        return Input.replace(/<(?:.|\n)*?>/gm, '');

    }
}