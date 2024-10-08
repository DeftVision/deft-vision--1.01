const mongoose = require('mongoose')
const schema = mongoose.Schema;

const userSchema = new schema({
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
        default: true
    },
    role: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
}, {timestamps: true});

const userModel = mongoose.model("User", userSchema)
module.exports = userModel
