const User = require('../model/user')

const createUser = async(req,res)=>{
    try{
        const val = await User.create({name:req.body.name})
        res.status(200).json(val)
    }
    catch(error){
        res.status(400).json({error: "Unable to create user"})
    }
}
const getUser =async(req,res)=>{
    try{
        const users = await User.find() 
        res.status(200).json(users)     
    }
    catch(error){
        res.status(400)
    }
}
module.exports = {createUser,getUser}