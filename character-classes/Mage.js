const Character = require('./Character');

class Mage extends Character{
    constructor(name, hp, attack, defense, speed, powerPoints){
        super(name, hp, attack, defense, speed);
        this.powerPoints = powerPoints;
    }
    fireBlast(opponent){
        opponent.hitPoints -= math.round(this.strength * .7) - opponent.defense;
    }
    thunderCall(opponent1, opponent2, opponent3){
        opponent1.hitPoints -= math.round(this.strength * .5) - opponent1.defense;
        opponent2.hitPoints -= math.round(this.strength * .5) - opponent2.defense;
        opponent3.hitPoints -= math.round(this.strength * .5) - opponent2.defense;
    }
    beamStrike(opponent){
        if (this.powerPoints > 0){
            opponent.hitPoints = math.round(this.strength * 1.5) - opponent.defense;
            this.powerPoints -= 1;
        }
    }
}

module.exports = Mage;