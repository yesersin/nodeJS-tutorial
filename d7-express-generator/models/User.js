const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const UserSchema =new Schema({
    username: {
        type: String,
        maxlength: 18,
        minlength: 4,
        required: true,
        unique: true
    }, 
    email : {
        type:String,
    },
    password: {
        type: String, 
        maxlength: [256,'`{PATH}` alanı `{VALUE}` degeri için en fazla `{MAXLENGTH} olamaz'],
        minlength: [1,'`{PATH}` alanı `{VALUE}` degeri için en fazla `{MINLENGTH} olamaz'],
     }
});

module.exports = mongoose.model('user',UserSchema);
