var express = require('express');
var router = express.Router();

const Book = require('../models/Book');
/* GET users listing. */
router.post('/new', function(req, res, next) {
    var todayDate = new Date().toISOString().slice(0, 10);
    const book = new Book({
        user: [{name:"erkan",age:44,date: todayDate}],
        published : true,
        comments : [{message: "mesajım"}],
        meta: {
            votes: 11,
            favs: 22
        },
        title: "defneeeee",
        testim : "defne",
        sartlar: 1
       
    });
    book.save((err,data)=>{
        if(err) res.json(err);
        res.json(data)
    });
});

router.get('/search', (req,res)=>{
    Book.find({'comments.message': 'mesajım'},'title',(err,data)=>{ //ilk küme hangi alanda ne arayacagım where kısmı, ikinci(title yazan yer) ekranda ne göstereyim. 
        res.json(data);
    });
});
router.get('/searchById', (req,res)=> {
    Book.findById('613fb6a0f285e79c6dd2e3a9',(err,data)=> {
        res.json(data);
    });
});

module.exports = router;
