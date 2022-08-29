const Character = require('./Character');

class Warrior extends Character{
    constructor(name, hp, attack, defense, speed, powerPoints){
        super(name, hp, attack, defense, speed);
        this.powerPoints = powerPoints;
    }
    slashAttack(opponent){
        opponent.hitPoints -= math.round(this.strength * .7) - opponent.defense;
    }
    defenseBoost(){
        this.defense += 2;
    }
    powerAttack(opponent){
        if (this.powerPoints > 0){
            opponent.hitPoints = math.round(this.strength * 1.5) - opponent.defense;
            this.powerPoints -= 1;
        }
    }
}

module.exports = Warrior;