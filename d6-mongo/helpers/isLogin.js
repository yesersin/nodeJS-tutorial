const isLogin  = (i,c,next)=>{
    let status= false;
    if(status)
        next();
    else
        c.send("Giriş yap!");
};

module.exports=isLogin;
