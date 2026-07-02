"use strict";

class Animal {
  constructor(name) {
    this.name = name;
    console.log(`${this.name} created`);
  }

  eat() {
    console.log(`${this.name} is eating`);
  }

  jump() {
    console.log(`${this.name} is jumping`);
  }
}

class Lion extends Animal {
  constructor(name) {
    super(name);
    console.log(`Lion ${this.name} created`);
  }

  eat() {
    super.eat();
    console.log(`${this.name} is eating with a roar`);
  }
}

const bunny = new Animal("Bunny");

bunny.eat();
bunny.jump();

console.log("----------------");

const lion = new Lion("Shera");

lion.eat();
lion.jump();
