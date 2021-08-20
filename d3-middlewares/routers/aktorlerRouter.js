
const router = require("express").Router();
let data =require('../data.js');

router.post("/",(istek,cevap,next)=>{
     
    let next_id = 4;
    let yeni_aktor = istek.body;
    if(yeni_aktor.isim) {
         yeni_aktor.id= next_id;
         next_id++;
         data.push(yeni_aktor);
         cevap.status(201).json(yeni_aktor);
    } else {
        console.log("hata");
        next({ hatakodu:400,hatamesajı: "Hata",detay:"burada eksik post var" });
    }
    next();//boşsa birsonraki yere gonderir
});
module.exports = router;
