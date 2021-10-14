const mongoose = require('mongoose');
const Schema =  mongoose.Schema;


const BookSchema =new Schema({
    title: {
        type: String,
        required: true
    },
    user: [{ name: String,age:Number, date: Date }],
    published : Boolean,
    testim: {
        type: String,
        default: "Erkan"
    },
    comments : [{message: String}],
    meta: {
        votes: Number,
        favs: Number
    },
    sartlar: {
        type: String,
        required: true,
        maxlength: [20,'`{PATH}` alanı `{VALUE}` degeri için en fazla `{MAXLENGTH} olamaz'],
        minlength: [2,'`{PATH}` alanı `{VALUE}` degeri için en fazla `{MINLENGTH} olamaz'],
        unique: true
    }
});

module.exports = mongoose.model('book',BookSchema);
