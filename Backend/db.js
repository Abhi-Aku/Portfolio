const mongoose = require("mongoose");
require('dotenv').config();

module.exports.db=mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("db connected");
}).catch((error)=>{
    console.log("db not connected",error);
});
