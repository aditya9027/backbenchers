const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    role: {
        type: Number,
        require: true
    }, // 0 admin,  1 seller , 2 user
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    country_code: {
        type: String,
        required: true
    },
    token: { type: String }

})

const User = mongoose.model("User", userSchema);

module.exports = User;