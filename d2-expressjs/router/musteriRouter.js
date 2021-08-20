const router = require("express").Router();
let data =require('../data.js');



router.get("/",(istek,cevap)=>{
    //res.send("musteriler");
    cevap.status(200).json(data);
});

router.get("/:birinci/:ikinci",(istek,cevap)=>{
     const birinci = istek.params.birinci;
     const ikinci = istek.params.ikinci;
     cevap.send(`${birinci} kategori, ${ikinci}`);
});

router.get("/:id",(istek,cevap)=>{ 
    //console.log("istek:body:",istek.body);
    console.log("istek:query",istek.query); /*!url den gelen ?ad=erkan gibi degerleri dizi seklinde tutar */
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


module.exports = router;
