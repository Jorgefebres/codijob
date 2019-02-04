
var express = require('express');
var SkillController = require('../controllers/Skill.js');
var router = express.Router();

router.get('/home',SkillController.home);
router.get('/skill/getall',SkillController.getAll);


module.exports = router;
