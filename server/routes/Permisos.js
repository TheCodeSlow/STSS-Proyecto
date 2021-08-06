const express = require('express');
const router = express.Router();
const { Permisos } = require('../models');

router.get('/:usuarioId', async (req, res)=> {
    const usuarioId = req.params.usuarioId;
    const permisos = await Permisos.findAll({ where: { UsuarioId: usuarioId }});
    res.json(permisos);
})

router.post("/", async (req, res) => {
    const permisos = req.body   
    await Permisos.create(permisos);
    res.send(200,{message: 'Se han subido los datos a la BD'})
    res.json(permisos);
});



module.exports = router;