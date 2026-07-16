require('dotenv').config();

const express = require('express');

const app = express();

const mongoose = require('mongoose');

app.use(express.json());


const port = process.env.PORT;

const cors=require('cors');
app.use(cors());

const todosRoutes = require('./routes/todos');

app.use('/api/todos', todosRoutes);



mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Mongo DB connected"))
    .catch((err) => console.log(err))




//logger
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
})
// app.get('/api/todos',(req,res)=>{
// res.json({message:"Hello every body"})
// })
// app.get('/api/todos/:id',(req,res)=>{
// const id=req.params.id;
// res.json({message:`Return the id ${id}`})
// })

app.post('/api/todos', (req, res) => {

    const title = req.body.title;
    res.status(201).json({ message: `her return todo was created by title ${title}` })
})
app.put('/api/todos/:id', (req, res) => {
    const id = req.params.id;
    const title = req.body.title;
    res.json({ message: `return todo was created by id ${id}&Title${title}` })
})

app.delete('/api/todos/:id', (req, res) => {
    const id = req.params.id;
    res.json({ message: `return todo has deleted by id${id}` })

})
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});

function myMiddleware(req, res, next) {

    next();
}