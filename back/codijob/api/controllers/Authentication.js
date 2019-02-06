'use strict';
var passport = require('passport');
const UsuarioDTO = require('../dto/UsuarioDTO');
const Usuario = require('../models/Usuario');


var controller = {
    register: function(req,res){
        UsuarioDTO.createUser(req.body.email,req.body.password)
                    .then((response)=>{
                        //reponse es el token del usuario
                        res.json({
                            "token" : response
                          });
                    }).catch((error)=>{
                        console.log(error);
                    });
    },
    login: function(req,res){
        
        UsuarioDTO.getUserByField('usu_email',req.body.email).then((response)=>{
            //response es el usuario que llega
            if(response.validatePassword(req.body.password)){
                let token = response.generateJWT();
                res.status(200).json({"token":token});
            }
            res.status(200).json({error:'invalid credentials'});

        }).catch((err)=>{
            res.status(400).send("error al loggearse");
        });

    },
    getUserInfo:function(req,res){
        // If no user ID exists in the JWT return a 401
        if (!req.payload.id) {
            res.status(401).json({
            "message" : "UnauthorizedError: private profile"
            });
        } else {
            // Otherwise continue
            UsuarioDTO.getUserByField('usu_id',req.payload.id)
                            .then((usuario)=>{
                                res.status(200).json(usuario);
                            });
        }
    }
};

module.exports = controller;
