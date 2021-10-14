const express = require('express');
const app = express(); 
//middleware tüm router kontrol et 
// app.use((i,c,next)=>{
//     let status= false;
//     if(status)
//         next();
//     else
//         c.send("Giriş yap!");
// });  
 
const user = require('./routers/user');
const profile = require('./routers/profile');

app.use('/user',user);
app.use('/profile',profile);

app.use((err,i,c,next)=>{
    c.status(err.status);
    c.send({
        message: err.message,
        status: err.status
    });
});
//http://127.0.0.1:3000/giris/1
// app.get("/giris/:id/:ek?",(i,c)=>{
//     c.send(i.params);
// });
app.listen(3000,()=>{
    console.log("girdi");
});
