const express = require('express');
const router = express.Router();
const { Usuarios } = require('../models');

router.get('/', async (req, res) => {
    const listadeUsuarios = await Usuarios.findAll();
    res.json(listadeUsuarios);
});


router.post('/', async (req, res) => {
    console.log(req.body)
    const usuarios = req.body;
    await Usuarios.create(usuarios);
    res.send(200,{message: 'Se han subido los datos a la BD'})
    res.json(usuarios);
});

router.post('/');


module.exports = router