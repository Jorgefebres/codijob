class Skill{
  constructor(newSkill_id, newSkill_nom){
    this._skill_id = newSkill_id;
    this._skill_nom = newSkill_nom;
  }

  get skill_id(){
    return this._skill_id;
  }
  set skill_id(newSkill_id){
    this._skill_id = newSkill_id;
  }
  
  get skill_nom(){
    return this._skill_nom;
  }
  set skill_nom(newSkill_nom){
    this._skill_nom = newSkill_nom;
  }

}

module.exports = Skill;