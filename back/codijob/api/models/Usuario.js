var crypto = require('crypto');
var jwt = require('jsonwebtoken');
class Usuario{
    constructor(newUsuEmail){
      this._usu_email = newUsuEmail;
      this._usu_hash = '';
      this._usu_salt = '';
      this._usu_id = '';
    }
    
    setPassword(password){
        this._usu_salt = crypto.randomBytes(16).toString('hex');
        this._usu_hash = crypto.pbkdf2Sync(password, this._usu_salt, 1000, 64, 'sha512').toString('hex');
    }

    set usu_id(newUsuId){
      this._usu_id = newUsuId;
    }
    get usu_id(){
      return this._usu_id;
    }

    set usu_hash(newUsuHash){
      this._usu_hash = newUsuHash;
    }
    get usu_hash(){
      return this._usu_hash;
    }

    set usu_salt(newUsuSalt){
      this._usu_salt = newUsuSalt;
    }
    get usu_salt(){
      return this._usu_salt;
    }

    set usu_email(newUsuEmail){
      this._usu_email = newUsuEmail;
    }
    get usu_email(){
      return this._usu_email;
    }

    validatePassword(password){
      var hash = crypto.pbkdf2Sync(password, this.usu_salt, 1000, 64, 'sha512').toString('hex');
      return this.usu_hash === hash;
    }

    generateJWT(){
      var expiry = new Date();
      expiry.setDate(expiry.getDate() + 7);

      return jwt.sign(
        {
            id: this.usu_id,
            email: this.usu_email,
            type:'profesional',
            exp: parseInt(expiry.getTime() / 1000),
        }, "123"); // DO NOT KEEP YOUR SECRET IN THE CODE!
    }
  
  }
  
  module.exports = Usuario;