'use stric';
const Skill = require('../models/Skill');

class SkillDTO{
     
    static getSkillByField(campo,valor){
        let query = "SELECT * from `t_skill` WHERE `"+campo+"`="+"'"+valor+"'";
        
        return new Promise((resolve,reject)=>{
            db.query(query, (err, result) => {
                if (err) {
                    return reject(err);
                }
                if(result.length===0){

                    return reject("error, no existen ");
                }
                console.log(result.length)
                //result = arreglo de skills
                let skills = [];
                result.forEach(skill => {
                    let objSkill = new Skill(skill._skill_id,skill._skill_nom);
                    skills.push(objSkill);    
                });
                console.log("retornando los sgts skills");
                console.log(skills);
                return resolve(skills);
            });
        });
    }    
      
  }
  
  module.exports = SkillDTO;