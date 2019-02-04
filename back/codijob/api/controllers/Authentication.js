'use strict';
const Skill = require('../models/Skill');

var controller = {
    register: function(req,res){
        return res.status(200).send({
            message:"HOME del controlador!!!"
        });
    },
};

module.exports = controller;
