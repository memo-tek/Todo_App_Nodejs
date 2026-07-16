const express = require('express');
const router = express.Router();

const Todo = require('../models/Todo');
const { mongoose } = require('mongoose');

const {
    getTodos,
    getTodosByID,
    updateTodo,
    createTodo,
    deleteTodo
}=require("../controllers/to.control");

router.get("/",getTodos)
router.get("/:id",getTodosByID)

router.put("/:id",updateTodo)

router.post("/",createTodo)
router.delete("/:id",deleteTodo)



// router.get('/api/todos',(req,res)=>{
// res.json({message:"Hello every body"})
// })
// router.get('/api/todos/:id',(req,res)=>{
// const id=req.params.id;
// res.json({message:`Return the id ${id}`})
// })

// router.post('/api/todos',(req,res)=>{

//     const title=req.body.title;
//     res.status(201).json({message:`her return todo was created by title ${title}`})
// })
// router.put('/api/todos/:id',(req,res)=>{
// const id=req.params.id;
// const title=req.body.title;
// res.json({message:`return todo was created by id ${id}&Title${title}`})
// })

// router.delete('/api/todos/:id',(req,res)=>{
//     const id=req.params.id;
//     res.json({message:`return todo has deleted by id${id}`})

// })
module.exports = router;