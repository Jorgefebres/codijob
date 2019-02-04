'use strict';
const Skill = require('../models/Skill');

var controller = {
    home: function(req,res){
        return res.status(200).send({
            message:"HOME del controlador!!!"
        });
    },
    getAll: (req,res)=>{
        let query = "SELECT * FROM `t_skill`";
        db.query(query, (err, result) => {
            if (err) {
                console.log(err);
                res.status(200).send({
                    error:'Error al procesar la consulta'
                })
            }
            var arreglo = [];

            result.forEach(skill => {
                var obj = new Skill(skill.skill_id,skill.skill_nom);
                arreglo.push(obj);
            });
            
            console.log(arreglo);
            
            res.status(200).send(arreglo);
        });
        

    }
};

module.exports = controller;
