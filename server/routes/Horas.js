const express = require('express');
const router = express.Router();
const { Horas } = require('../models')
const {validateToken} = require("../middlewares/AuthMiddleware")



router.post('/', validateToken,async (req, res) => {
    const { UsuarioId } = req.body;
    const UserId = req.user.id;
    const foud = await Horas.findOne({ 
        where: { UsuarioId: usuarioId, UserId: UserId },
    });
    if(!found){
        await Horas.create({UsuarioId: UsuarioId, UserId:UserId})
        res.json("Hora Creada")
    } else {
        await Horas.destroy({where: {
            id: permisoId,   },
        });
    }
    
    
});






module.exports = router