const mongoose = require('mongoose')

// schema
var schema=mongoose.Schema({
    Name:String,
    Age:Number,
    Dept:String,
   Salary:Number
})

// model creation
var EmployeModel=mongoose.model("employee",schema)
module.exports=EmployeModel
