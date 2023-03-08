const http = require("http");
const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const misRutas = require("./router/index");
const path = require("path");

app.set('view engine',"ejs");
app.use(express.static(__dirname + '/public'));
app.use(bodyparser.urlencoded({extended:true}));
app.use(misRutas);
app.engine('html',require('ejs').renderFile)



app.use((req,res,next)=>{
    res.status(404).sendFile(__dirname+'/public/error.html')
})
const puerto = 4000;
app.listen(puerto,()=>{
    console.log("Iniciado puerto.");
});