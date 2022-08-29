const Character = require('./Character');

class Rogue extends Character{
    constructor(name, hp, attack, defense, speed, powerPoints){
        super(name, hp, attack, defense, speed);
        this.powerPoints = powerPoints;
    }
    sneakAttack(opponent){
        opponent.hitPoints -= math.round(this.strength * .7) - opponent.defense;
    }
    speedBoost(){
        this.speed += 2;
    }
    assasinateAttack(opponent){
        if (this.powerPoints > 0){
            opponent.hitPoints = math.round(this.strength * 1.5) - opponent.defense;
            this.powerPoints -= 1;
        }
    }
}

module.exports = Rogue;