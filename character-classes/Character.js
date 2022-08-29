class Character {
    constructor(name, hp, attack, defense,speed) {
      this.name = name;
      this.attack = attack;
      this.hp = hp;
      this.defense = defense;
      this.speed = speed;
    }
  
    // Method which prints all of the stats for a character
    // printStats() {
    //   console.log(`Stats for ${this.name} are as following:`);
    //   console.log(`Each attack will do ${this.strength} damage.`);
    //   console.log(`${this.name} has ${this.hitPoints} hit points remaining!`);
    //   console.log('------------');
    // }
  
    // Method which determines whether or not a character's "hitpoints" are less then zero
    // Returns true or false depending upon the outcome
    isAlive() {
      if (this.hitPoints <= 0) {
        console.log(`${this.name} has been defeated!`);
        return false;
      }
      return true;
    }
  
    // Method which takes in a second object and decreases their "hitPoints" by this character's strength
    attack(opponent) {
      console.log(`${this.name} hit ${opponent.name} for ${this.strength}`);
      opponent.hitPoints -= this.strength;
    }
  }

  module.exports = Character;