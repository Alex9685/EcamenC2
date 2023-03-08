const express = require("express");
const router = express.Router();
const bodyparser = require("body-parser");

router.get("/paginaEntrada",(req,res)=>{
    
    const valores = {
        numRecibo : req.query.numRecibo,
        nomCliente : req.query.nomCliente ,
        domicilio : req.query.domicilio,
        tipo : req.query.tipo,
        kilowat : req.query.kilowat,
        subtotal : req.query.subtotal,
		impuesto : req.query.impuesto,
		descuento: req.query.descuento,
		total: req.query.total,
		descuento: req.query.descuento,
        kilowatC: req.query.kilowatC,
        costo : req.query.costo,
        diat : req.query.diat
    }
    

    res.render('paginaEntrada.html',valores)

})

router.post("/paginaEntrada",(req,res)=>{
    
    const valores = {
        numRecibo : req.body.numRecibo,
        nomCliente : req.body.nomCliente ,
        domicilio : req.body.domicilio,
        tipo : req.body.tipo,
        kilowat : req.body.kilowat,
        subtotal : req.body.subtotal,
		impuesto : req.body.impuesto,
		descuento: req.body.descuento,
		total: req.body.total,
		descuento: req.body.descuento,
        kilowatC: req.body.kilowatC,
        costo : req.body.costo,
        diat : req.body.diat
    }
    
    res.render('paginaSalida.html',valores)

})


router.get("/paginaSalida",(req,res)=>{
    
    const valores = {
        numRecibo : req.query.numRecibo,
        nomCliente : req.query.nomCliente ,
        domicilio : req.query.domicilio,
        tipo : req.query.tipo,
        kilowat : req.query.kilowat,
        subtotal : req.query.subtotal,
		impuesto : req.query.impuesto,
		descuento: req.query.descuento,
		total: req.query.total,
		descuento: req.query.descuento,
        kilowatC: req.query.kilowatC,
        costo : req.query.costo,
        diat : req.query.diat
    }
    

    res.render('paginaSalida.html',valores)

})

router.post("/paginaSalida",(req,res)=>{
    
    const valores = {
        numRecibo : req.body.numRecibo,
        nomCliente : req.body.nomCliente ,
        domicilio : req.body.domicilio,
        tipo : req.body.tipo,
        kilowat : req.body.kilowat,
        subtotal : req.body.subtotal,
		impuesto : req.body.impuesto,
		descuento: req.body.descuento,
		total: req.body.total,
		descuento: req.body.descuento,
        kilowatC: req.body.kilowatC,
        costo : req.body.costo,
        diat : req.body.diat
    }
    

    res.render('paginaSalida.html',valores)

})





module.exports=router;