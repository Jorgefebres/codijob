'use strict';
const UsuarioDTO = require('../dto/UsuarioDTO');
const Usuario = require('../models/Usuario');


var controller = {
    register: function(req,res){
        // let usuario = new Usuario();
        let respuesta  = UsuarioDTO.createUser(req.body.email,req.body.password);
        res.status(200).send(respuesta);
    },
};

module.exports = controller;
