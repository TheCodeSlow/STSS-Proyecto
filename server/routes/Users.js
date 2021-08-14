const express = require('express');
const router = express.Router();
const { Users } = require('../models');
const bcrypt = require("bcrypt");
const {validateToken} = require('../middlewares/AuthMiddleware')
const { sign } = require('jsonwebtoken')


router.post('/', async (req, res) => {
     const {usuario, password } = req.body      
     bcrypt.hash(password, 10).then((hash) => {
         Users.create({
             usuario: usuario,
             password: hash,
         })
         res.json("Creado")
     } )
});

router.post('/login', async (req,res)=> {
    const {usuario, password} = req.body;
    const user = await Users.findOne( { where: {usuario: usuario }});

    if(!user) res.json({error: "El usuario no existe"});

    bcrypt.compare(password, user.password).then((match) =>{
        if (!match) res.json({error: "La contraseña es incorrecta"})
        const accessToken = sign({usuario: user.usuario, id: user.id},"importantsecret" )

        res.json({token: accessToken, usuario: usuario, id: user.id});
    })

});


router.get('/auth', validateToken, (req, res) => {
     res.json(req.user);
})





module.exports = router