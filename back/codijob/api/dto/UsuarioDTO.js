'use stric';
var crypto = require('crypto');
const Usuario = require('../models/Usuario');
class UsuarioDTO{
       
    static createUser(email, password){
        let usuario = new Usuario(email);
        usuario.setPassword(password);
        let query = "INSERT INTO `t_usuario`(`usu_nom`, `usu_ape`, `usu_email`, `usu_hash`, `usu_salt`, `usu_tip`, `usu_web`, `usu_git`, `usu_ima`) VALUES ('nom','ape','"+email+"','"+usuario._usu_hash+"','"+usuario._usu_salt+"','tipo','web','git','ima') ";
        db.query(query, (err, result) => {
            if (err) {
                console.log(err);
                return 'error';
            }
            console.log(result);
            return 'exito';
        });
    }

    static getUserByEmail(email){
        let usuario = new Usuario();
        let query = "SELECT * FROM t_usuario WHERE `usu_email` = "+email;
        db.query(query, (err, result) => {
            if (err) {
                console.log(err);
                res.status(200).send({
                    error:`Error al procesar la consulta ${query}`
                })
            }
            
            res.status(200).send(arreglo);
        });
    }
  
  }
  
  module.exports = UsuarioDTO;