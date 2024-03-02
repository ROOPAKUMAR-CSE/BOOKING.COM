//CREATE User CONTROLLER
import User from "../models/User.js"


//UPDATE User CONTROLLER
export const updateUser =  async (req,res,next) => {

    try{
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id, 
            { $set: req.body}, 
            {new: true}
        )
        res.status(200).json(updatedUser)
    }catch(err){
        res.status(500).json(err)
    }
}

//DELETE User CONTROLLER
export const deleteUser =  async (req,res,next) => {

    try{
        await User.findByIdAndDelete(
            req.params.id
        )
        res.status(200).json("Deleted Successful")
    }catch(err){
        res.status(500).json(err)
    }
}

//GET User CONTROLLER
export const getUser =  async (req,res,next) => {
    
    try{
        const user = await User.findById(
            req.params.idk
        )
        res.status(200).json(user)
    }catch(err){
        res.status(500).json(err)
    }
}

//GET ALL User CONTROLLER
export const getUsers =  async (req,res,next) => {
    
    try{
        const users = await User.find()
        res.status(200).json(users)
    }catch(err){
        next(err);
    }
}