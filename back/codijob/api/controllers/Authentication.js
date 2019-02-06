'use strict';
var passport = require('passport');
const UsuarioDTO = require('../dto/UsuarioDTO');
const Usuario = require('../models/Usuario');


var controller = {
    register: function(req,res){
        let usuario = new Usuario();
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
        passport.authenticate('local', function(err, user, info){
            var token;
        
            // If Passport throws/catches an error
            if (err) {
              res.status(404).json(err);
              return;
            }
        
            // If a user is found
            if(user){
              token = user.generateJWT();
              res.status(200);
              res.json({
                "token" : token
              });
            } else {
              // If user is not found
              res.status(401).json(info);
            }
          })(req, res);
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
                                res.status(200).json(user);
                            });
        }
    }
};

module.exports = controller;
