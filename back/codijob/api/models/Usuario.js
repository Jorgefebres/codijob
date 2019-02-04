var crypto = require('crypto');
class Usuario{
    constructor(newUsuEmail){
      this._usu_email = newUsuEmail;
      this._usu_hash = '';
      this._usu_salt = '';
    }
    
    setPassword(password){
        
        this._usu_salt = crypto.randomBytes(16).toString('hex');
        this._usu_hash = crypto.pbkdf2Sync(password, this._usu_salt, 1000, 64, 'sha512').toString('hex');
    }
  
  }
  
  module.exports = Usuario;