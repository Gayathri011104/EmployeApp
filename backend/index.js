// import
const express = require('express')
require("./connection")
var empModel=require("./model/employee")
const { Message } = require('@mui/icons-material')
var cors = require('cors')

// initialize
const app = express()
app.use(cors())


// midd
app.use(express.json());

// api creation
app.get('/',(req,res) => {
    res.send('Hello World')
})

app.get('/trial',(req,res) => {
    res.send('Trial message')
})

app.post('/add',async(req,res) => {
    try {
        await empModel(req.body).save()
        res.send({Message:"data added"})
    } catch (error) {
        console.log(error)
    }
})

// api to view
app.get('/view',async(req,res) => {
    try {
        const view=await empModel.find()
        res.send(view)
    } catch (error) {
        console.log(error)
    }
})

// delete api

app.delete('/delete/:id',async(req,res)=>{
    try{
    await empModel.findByIdAndDelete(req.params.id)
    res.send({message:"data deleted"})
    }catch (error) {
        console.log(error)
    }
})

app.put('/update/:id',async(req,res)=>{
    try{
    await empModel.findByIdAndUpdate(req.params.id,req.body)
    res.send({message:"data updated"})
    }catch{
        console.log(error)
    }
})

// port setting
app.listen(3004,()=>{
    console.log("port is running at 3004")
})
