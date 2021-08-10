const express = require('express');
const router = express.Router();
const { Users } = require('../models');
const bcrypt = require("bcrypt");


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

        res.json("Has ingresado!");
    })

});






module.exports = router