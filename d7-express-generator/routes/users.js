var express = require('express');
var router = express.Router();

const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

 router.post("/register", async (req, res) => {
  const body = req.body;
  if (!(body.usernameq && body.passwordq)) {
    return res.status(400).send({ error: "Eksik bilgi girdiniz" });
  }
  const user = new User({
    username: body.usernameq,
    password: body.passwordq,
  });

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  User.findOne({ username: body.usernameq }, '_id username', (err, userx) => {
    
    if (err)
      throw err;
    if (!userx) {
      const promis = user.save().then((doc) => res.status(201).send(doc));
      promis.then((data) => {
        res.json({
          status: 200,
          message: "Başarılı",
          data: data
        });
      }).catch((err) => {
        err.erkan = "Hata! Üye oluşturulamadı";
        res.status(400).json(err);
      })
    } else {//başarılı 
      res.json({
        status: 200, 
        message: "Üye adı zaten var",
        data: userx
      });
    }
  });
});


router.post("/login", async (req, res) => {
  const body = req.body;
  const uname = body.username;
  const user = await User.findOne({ username: body.usernameq },);
  if (user) {
    const validPassword = await bcrypt.compare(body.passwordq, user.password);
    if (validPassword) {
      //res.status(200).json({ message: "Şifre dogru" });
      const token = jwt.sign({uname}, req.app.get('apiKey_jsonwebtoken'),{expiresIn:720});
      res.status(200).json({ data:user, token: token});
    } else {
      res.status(400).json({ error: "Şifre hatası" });
    }
  } else {
    res.status(401).json({ error: "Kullanıcı bulunamadı" });
  }
});

module.exports = router;
