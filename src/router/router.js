const express = require('express')
const Router = express.Router()
const Todo = require('../schema/todoschema')


Router.post("/tasks",async(req,res)=>{
        try{
            let Result;
        if(Array.isArray(req.body)){
          for(element of req.body){
            const todolist = await Todo.findOne().sort({id:-1}).limit(1)
            Result = await Todo.create({
                id: todolist.id ? todolist.id : 1,
                title:element.title,
                status:element.status
             })
          }
        }
        else{
            const todolist = await Todo.findOne().sort({id:-1}).limit(1)
            console.log(todolist)
             Result = await Todo.create({
                id: todolist.id ? todolist.id+1 : 1,
                title:req.body.title,
                status:req.body.status
             })
        }
        res.status(201).json({
            id:Result.id
        })

        }
        catch(error){
            console.log(error)
        }
})


Router.get("/tasks",async(req,res)=>{
    try{

    const Result = await Todo.find();
    
    res.status(200).json({
      Result:Result
    })

    }
    catch(error){
        console.log(error)
    }
})

Router.get("/tasks/:id",async(req,res)=>{
    try{
    const id = req.params.id
    const Result = await Todo.find({id:req.params.id});
    console.log(Result)
    if(Result.length>0){
        res.status(200).json({
            Result:Result
          })
    }
    else{
        res.status(404).json({
            message:"There is no task at that id"
        })
    }
    }
    catch(error){
        console.log(error)
    }
})


Router.put("/tasks/:id",async(req,res)=>{
    try{
    const Result = await Todo.findOneAndUpdate({id:req.params.id},{
        title:req.body.title,
        status: req.body.status
    });
    res.status(204)
    }
    catch(error){
        console.log(error)
    }
})

Router.delete("/tasks/:id",async(req,res)=>{
    try{ 
  const Result = await Todo.deleteOne({id:req.params.id})
    res.status(204).json({
        Result:Result
    })
    }
    catch(error){
        console.log(error)
    }
})

Router.delete("/tasks",async(req,res)=>{
    try{
      let Result;
      for(element of req.body){
        Result = await Todo.deleteOne({id:element})
      }

    res.status(204).json({
        Result:Result
    })
    }
    catch(error){
        console.log(error)
    }
})




module.exports = Router;