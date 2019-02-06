'use stric';
const Usuario = require('../models/Usuario');

class UsuarioDTO{
     /**
      * Funcion para crear un usuario
      * @param {*} email 
      * @param {*} password 
      * @param {*} respuesta 
      */  
    static createUser(email, password){
        //el usuario creado a continuación, solo tendrá email
        var usuario = new Usuario(email);
        //a continuación, el usuario tendra hash y salt
        usuario.setPassword(password);

        let query = "INSERT INTO `t_usuario`(`usu_nom`, `usu_ape`, `usu_email`, `usu_hash`, `usu_salt`, `usu_tip`, `usu_web`, `usu_git`, `usu_ima`) VALUES ('nom','ape','"+usuario._usu_email+"','"+usuario._usu_hash+"','"+usuario._usu_salt+"','tipo','web','git','ima') ";
        
        return new Promise((resolve,reject)=>{
            db.query(query, (err, result) => {
                if (err) {
                    reject("error");
                }
                this.getUserByField('usu_id',result.insertId)
                        .then((response)=>{
                            var token;
                            token = response.generateJWT();
                            console.log("usuario creado, devolviendo el token");
                            console.log(response.generateJWT());
                            resolve(token);
                        });                
            });
        });
    }
    /**
     * 
     * @param {*} campo ejm: 'user_email'
     * @param {*} valor ejm: 'jorgegarba@gmail.com'
     */
    static getUserByField(campo,valor){

        let query = "SELECT * from `t_usuario` WHERE `"+campo+"`="+"'"+valor+"'";
        
        return new Promise((resolve,reject)=>{
            db.query(query, (err, result) => {
                if (err) {
                    return reject("error");
                }
                if(result.length===0){
                    console.log("putos");
                    
                    return reject("asdasd");
                }
                console.log(result.length)
                let objUsuario = new Usuario(result[0].usu_email);
                objUsuario.usu_salt = result[0].usu_salt;
                objUsuario.usu_hash = result[0].usu_hash;
                objUsuario.usu_id = result[0].usu_id;
                console.log(`encontrado el usuario con campo ${campo} y valor ${valor}`);
                return resolve(objUsuario);
            });
        });
    }
     
      
  }
  
  module.exports = UsuarioDTO;