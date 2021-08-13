const data = require('./data.js');
const express = require("express");
const server = express(); //expresi cagır

server.get("/",(req,res)=>{
    res.send("Express");
});

server.listen(5000,()=>{
    //gelen tüm istekleri dinşe
    console.log("istek geldi.")
});

server.get("/musteriler",(req,res)=>{
    //res.send("musteriler");
    res.status(200).json(data);
});

server.get("/musteriler/:id",(istek,cevap)=>{ 
    var id = istek.params.id;  
    // const { id } = istek.params;
    const musterilerx = data.find(musterilerx=> musterilerx.id === parseInt(id));
    
    if(musterilerx) {
        cevap.status(200).json(musterilerx);
    }else {
        cevap.status(400).send("bulunamadı.");
    }
   // const aktor = data.find( aktor=> aktor.id === id);
});
