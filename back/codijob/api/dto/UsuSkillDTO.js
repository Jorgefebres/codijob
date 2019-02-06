'use stric';
const Skill = require('../models/Skill');
class UsuSkillDTO{
     
    static getSkillsByUsuId(usu_id){
        let query = "SELECT s.*, us.ususkill_nivel FROM `t_skill` s, `t_ususkill` us WHERE us.usu_id = '"+usu_id+"' AND s.skill_id = us.skill_id";
        
        return new Promise((resolve,reject)=>{
            db.query(query, (err, result) => {
                if (err) {
                    return reject(err);
                }
                if(result.length===0){
                    console.log(result);
                    console.log("El usuario no tiene skills");
                    return resolve([]);
                }
                console.log(result.length)
                //result = arreglo de skills
                let skills = [];
                result.forEach(skill => {
                    let objSkill = {
                        skill_id:skill.skill_id,
                        skill_nom:skill.skill_nom,
                        skill_nivel:skill.ususkill_nivel+"%"
                    };
                    skills.push(objSkill);    
                });
                console.log("retornando los sgts skills");
                console.log(skills);
                return resolve(skills);
            });
        });
    }    
  }
  
  module.exports = UsuSkillDTO;