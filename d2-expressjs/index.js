const express = require("express");
const musteriRouter = require('./router/musteriRouter');

const server = express(); //expresi cagır
server.use(express.json()); //bütün gelen isteklerde bunu kullan dedik.
server.use("/musteri", musteriRouter); //oluşturdugum router burada cagrılıyor.


server.get("/",(istek,cevap)=>{
    cevap.send("Express");
});

server.listen(5000,()=>{
    //gelen tüm istekleri dinşe
    console.log("istek geldi.");
});


/**
 * var app = server.listen(3000,function() {
     console.log("sunucu dinleniyor port: %d",app.address().port);
 });
 */

