const express  = require("express");
const server = express();

const aktorlerRouter = require("./routers/aktorlerRouter");
const logger = require("./middlewares/logger.js");
const errorHandling = require("./middlewares/errorHandling.js");


server.use(express.json());
server.use(logger);
server.use("/aktorler",aktorlerRouter);


server.get("/",(i,c)=>{
    c.send("Express");
});


server.use(errorHandling); //bu listen den once olmalı. yukarda olursa hata verebilir.

server.listen(5000,()=> {
    console.log("listen");
});
