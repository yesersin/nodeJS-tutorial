var express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.urlencoded({extended:true})); //standart kullanımmış!

var sehirler = ["istanbul","hatay","tokat","gaziantep"];

app.get("/sehirler", function(i,c) {
    c.send(sehirler);
    
});

app.post("/sehirlerEkle", function(i,c) {
    var yeniSehir = i.body.ySehir;  //postman da x-www-form-urlencode olarak gonderiliyor.
    sehirler.push(yeniSehir);
    c.redirect("/sehirler");
});

var server = app.listen(3000, function(){
    console.log("dinleniyoruz.");
})
