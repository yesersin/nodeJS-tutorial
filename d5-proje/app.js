const express = require('express');
const _ = require('lodash');
const server = express();
const bodyParser = require('body-parser');
server.use(bodyParser.urlencoded({extended:true})); //standart kullanımmış! zorunlu!

server.post("/test",(i,c,next)=>{ 
    const {isim,sehir,bitki,hayvan} = i.body; //postman: body,x-www ile method:post
   // c.json(isim);
    if(_.isEmpty(isim)){
        c.json({"hata":"isim olmalı"});
    }
   
   
});

server.listen(5000,()=> {
    console.log("listen");
});
