const express = require('express');
const router = express.Router();
const isLogin = require('../helpers/isLogin'); //middleware burada cagırdım

router.get("/",isLogin,(i,c,next)=>{ //birden fazla isLoading gibi cagırabilirim
    c.send("get profile");
});


router.post("/",(i,c,next)=>{
    c.send("profile post user");
});


module.exports= router;
