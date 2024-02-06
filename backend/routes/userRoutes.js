const express=require("express");
const mongoose=require("mongoose");
const User=require("../models/userModels");
const router=express.Router();

router.post("/",async(req,res)=>{
    
    
    
    try{
        const useradded=await User.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            location:req.body.location
        });
        res.status(200).json({success:true, data: useradded, message:'created'});
    }
    catch(error){
        console.log(error);
        res.status(400).json({success:false, message:'MC', error:error.message});

    }
});

router.get("/",async(req,res)=>{
    try{
        const showall=await User.find();
            

        
        res.status(400).json(showall);
    }
    catch(error){
        console.log(error);
        res.status(500).json({error:error.message});

    }
    
    


});
router.get("/:id",async(req,res)=>{
    try{
        const {id}=req.params;
        const singleUser=await User.findById({_id:id});
            

        
        res.status(200).json(singleUser);
    }
    catch(error){
        console.log(error);
        res.status(500).json({error:error.message});

    }
    
    


});
router.get("/:id",async(req,res)=>{
    try{
        const {id}=req.params;
        const singleUser=await User.findByIdAndDelete({_id:id});
            

        
        res.status(200).json(singleUser);
    }
    catch(error){
        console.log(error);
        res.status(500).json({error:error.message});

    }
    
    


});
router.get("/:id",async(req,res)=>{
    try{
        const {id}=req.params;
        const {name,email,age}=req.body;
        const updateUser=await User.findByIdAndUpdate(id,req.body,{new:true,});
            

        
        res.status(200).json(updateUser);
    }
    catch(error){
        console.log(error);
        res.status(500).json({error:error.message});

    }
    
    


});

module.exports=router;
