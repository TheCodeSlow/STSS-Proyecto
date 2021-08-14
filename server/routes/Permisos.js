const express = require('express');
const router = express.Router();
const { Permisos } = require('../models');
const { validateToken } = require('../middlewares/AuthMiddleware');

router.get('/:usuarioId', async (req, res)=> {
    const usuarioId = req.params.usuarioId;
    const permisos = await Permisos.findAll({ where: { UsuarioId: usuarioId }});
    res.json(permisos);
})

router.post("/", validateToken, async (req, res) => {
    const permisos = req.body  
    const usuario = req.user.usuario
    permisos.usuario = usuario;
    await Permisos.create(permisos);
    res.send(200,{message: 'Se han subido los datos a la BD'})
    res.json(permisos);
});


router.delete("/:permisoId", validateToken, async (req, res) =>{
    const permisoId = req.params.permisoId
    await Permisos.destroy({where: {
        id: permisoId,
    }})
    res.json("Permiso Eliminado")


})


module.exports = router;