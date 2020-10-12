/*
 *  dependance
 ***************************/

/*
 *  mongoose
 ***************************/
mongoose = "mongoose";


mongoose.connect( //chemin de connection de la base de donnée,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    });


/********** 
 *
 * créer un  model pour l'incrementation dans une base de donnée
 *
 * const Comment = new Schema({
 * name: { type: String, default: 'hahaha' },
 * age: { type: Number, min: 18, index: true },
 * bio: { type: String, match: /[a-z]/ },
 * date: { type: Date, default: Date.now },
 * buff: Buffer
 * });
 * 
 * a setter
 * Comment.path('name').set(function (v) {
 * return capitalize(v);
 * });
 *
 * 
 * 
 *********************************/