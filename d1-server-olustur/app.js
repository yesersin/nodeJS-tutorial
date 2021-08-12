const http = require('http');
const host = '127.0.0.1';
const port = 3000;

const server=http.createServer((istek,cevap)=>{
    cevap.statusCode =200;
    cevap.setHeader('Content-Type','text/plain');
    cevap.end('Bitti');
});

server.listen(port, host,()=>{
    console.log("http://"+host+":"+port);
});
