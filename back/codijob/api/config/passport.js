var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
const Usuario = require('../models/Usuario');
const UsuarioDTO = require('../dto/UsuarioDTO');

passport.use(new LocalStrategy({
    usernameField: 'email'
  },
  //el parametro username, representa al email
  function(username, password, done) {
    UsuarioDTO.getUserByField('usu_email',username)
            .then((response)=>{
                //usuario no existe
                if(response===null){
                    return done(null, false, {
                        message: 'User not found'
                    });
                }
                let objUsuario = new Usuario();
                objUsuario=response;
                //usuario con pass incorrecto
                if (!objUsuario.validatePassword(password)) {
                    return done(null, false, {
                        message: 'Password is wrong'
                    });
                }        
                return done(null, objUsuario);
            })
            .catch((error)=>{
                if (error) {
                    return done('rayos '+err);
                }    
            });    
  }
));