const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    googleId : {
        type: String,
        required: true
    },
    gmail: {
        type: String
    }
})

mongoose.model('users',userSchema); //mongoose checks if users schema already exists



