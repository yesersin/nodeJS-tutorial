 
module.exports = (i,c,next) => {
    console.log(`${new Date().toUTCString()}- ${i.method} - ${i.hostname} `);
    next(); //sonraki middlewares gitmesi için gerekli yoksa boş bekler.
};
