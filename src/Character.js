export default class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.level = 1;
    this.attack = 40;
    this.defence = 10;
  }

  levelUp() {
    if (this.health < 1) {
      throw new Error('Ошибка. Нельзя повысить левел умершего');
    } else {
      this.level += 1;
      this.attack += this.attack * 0.2;
      this.defence += this.defence * 0.2;
      this.health = 100;
    }
  }
}
