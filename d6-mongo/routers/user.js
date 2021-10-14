const express = require('express');
const router = express.Router();

router.get("/",(i,c,next)=>{
   
    let user = true;
    if(user)
        c.send("user syfas");
    else
        return next({status:404,message:"hata"});
});


// router.post("/",(i,c,next)=>{
//     c.send(" post user");
// });


module.exports= router;
