const jwt = require('jsonwebtoken');
module.exports = (req,res,next) => {
    const token =req.headers['x-access-token'] || req.body.token || req.query.token
    
    if(token) {
        jwt.verify(token,req.app.get('apiKey_jsonwebtoken'),(err,decoded) => {
            if(err) {
                res.json({
                    status: false,
                    message: 'token hatalı',
                    er: err
                })
            }else {
                req.decoded =decoded;
                next();
            }
        });
    }else {
        res.json({
            status: false,
            message: 'token gelmedi'
        })
    }
};
