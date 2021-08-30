var express = require("express");
var bodyParser = require("body-parser");


var app = express();
app.use(express.static('public')); //artık herhangi bir yerde public/style.css dememe gerek yok. style.css diye cagırırım.
app.use(bodyParser.urlencoded({extended:true})); //standart kullanımmış!

var sehirler = ["istanbul","hatay","tokat","gaziantep"];

app.get("/sehirler", function(i,c) {
    c.send(sehirler);
    
});

//?: zorunlu olmayan
//* :herhangi bir deger
//+ sonra gelen herhangi bir şey.
app.get("/sehir?",function(i,c){
    console.log(i);
});

//get,post,put,delete ne varsa buraya yönlendir demek.
app.all("/sehir",function(i,c){
    console.log(i);
});

//burda ? işareti ile olsada olur olmasada dedik.
app.all("/sehir/:id?",function(i,c){
    console.log(i);
});

app.post("/sehirlerEkle", function(i,c) {
    var yeniSehir = i.body.ySehir;  //postman da x-www-form-urlencode olarak gonderiliyor.
    sehirler.push(yeniSehir);
    c.redirect("/sehirler");
});

var server = app.listen(3000, function(){
    console.log("dinleniyoruz.");
})
