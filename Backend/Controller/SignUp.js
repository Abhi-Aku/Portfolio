var jwt = require('jsonwebtoken');
const DataSignUp = require("../Models/SignUp");

module.exports.PostData = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const data = await DataSignUp.create({ name, email, password });
        res.status(200).json({ message: "Data send success", data });
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: "Data not send success" }); 
    }
};

// Data get

module.exports.GetData = async (req, res) => {
    try {    
        const data = await DataSignUp.find();
        res.status(200).json({ message: "Data get success", data });
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: "Data not get success" });
    }
};
// login api

module.exports.SignUpLogin = async (req, res) => {
    const {email,password} = req.body;
    try{
        const responce=await DataSignUp.findOne({email});
        if(!responce){
            return res.status(400).json({message:"Data Not Found",responce});
        }
        if(responce.password !==password){
            return res.status(400).json({message:"Incorrect Password",responce});
        }

      const token = jwt.sign({ 
        id: responce._id ,
        email: responce.email,
        password: responce.password
         
      },   
        process.env.JWT_SECRET, { expiresIn: "1h" });
        res.status(200).json({message:"Login Successfully",responce,token});
        console.log(token);

    }catch(err){
        console.log(err);
        res.status(500).json({message:"Server Error",error:err.message});   

    }
};
