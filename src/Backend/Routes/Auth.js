const userModel = require('../Model/user.js');
const Bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');
require('dotenv').config();
const express = require('express');
const Formidable = require('formidable');
const router = express.Router();


//USER AUTH
router.post("/api/user-register",(request,response)=>{
 
    const form=Formidable.IncomingForm();     //formidable is used for parsing the data
  
    form.parse(request, async (error,fields,files)=>{

          const {email,password,name,verifiedPassword}=fields;

        try{
          if(!email || !password || !name || !verifiedPassword){
              return response.status(400).json({msg:"All field have to be entered"})
          }
          if(password.length<5){
            return response.status(400).json({msg:"Password should be atleast of length 5"})   
          } 
         if(password !== verifiedPassword){
            return response.status(400).json({msg:"Password's have to be match"})   
         }

         const user= await userModel.findOne({email:email});       //finding an email in DB if it already exist
         if(user){
            return response.status(500).json({msg:"Email already exist"})   
         }
        
   
         const salt = await Bcrypt.genSalt(15);              //Bcrypt is used in password functionality
         const hashPassword= await Bcrypt.hash(password,salt);
       

         const newUser= new userModel({       //new instance created
             name,
             email,
             password: hashPassword,

         })

         const saveUser=await newUser.save();
         
      
         const token=JWT.sign({id:saveUser._id},process.env.secretKey);
       

         return response.status(201).json({

             msg:"Account was Succesfully Created",
             name: saveUser.name,
             email: saveUser.email,
             
            })  

        }
        catch(error){
         
            return response.status(500).json({msg:"Server is down try again later!"})   
        }

    })

})

module.exports= router;