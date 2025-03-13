const mongoose = require("mongoose");
const { Schema } = mongoose;

const signUpSchema = new Schema({
    name: {
        type: String,
        
    },
    email: {
        type: String,
        
    },
    password: {
        type: String,
       
    }
});

module.exports = mongoose.model("SignUpData", signUpSchema);
