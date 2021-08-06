const express = require('express');
const router = express.Router();
const { Usuarios } = require('../models');
const { Permisos } = require('../models');

router.get('/', async (req, res) => {
    const listadeUsuarios = await Usuarios.findAll();
    res.json(listadeUsuarios);
});

router.get('/byId/:id', async (req, res)=> {
    const id = req.params.id
    const usuario = await Usuarios.findByPk(id);
    res.json(usuario);
})

router.post('/', async (req, res) => {
    console.log(req.body)
    const usuarios = req.body;
    await Usuarios.create(usuarios);
    res.send(200,{message: 'Se han subido los datos a la BD'})
    res.json(usuarios);
});



/*router.get('/', async (req, res) => {
    const listadePermisos = await Permisos.findAll();
    res.json(listadePermisos);
});

router.post('/', async (req, res) => {
    console.log(req.body)
    const permisos = req.body;
    await Permisos.create(permisos);
    res.send(200,{message: 'Se han subido los datos a la BD'})
    res.json(permisos);
});
*/




module.exports = router