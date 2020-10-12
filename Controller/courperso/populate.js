/*
 *  dependance
 ***************************/
/*
 *  mongoose populate
 ***************************/
//Installation
//       $ npm install mongoose - populate
//CommonJS
const { Schema } = require('mongoose')
const { createPopulateHook } = require('mongoose-populate')

// Schema
const ExampleSchema = new Schema({
        example: {
            type: Schema.Types.ObjectId,
            ref: 'OtherModel',
        },
    })
    //Hook replacement

ExampleSchema.pre('find', function populateExampleHook(next) {
    this.populate('example');
    next();
});

+
ExampleSchema.pre('find', createPopulateHook('example'));
//Keywords
//none
//Install
//npm i mongoose - populate