"use strict";

class Animal {
  constructor(name) {
    this.name = name;
    console.log(`${this.name} created`);
  }

  eats() {
    console.log(`${this.name} is eating`);
  }

  jumps() {
    console.log(`${this.name} is jumping`);
  }
}

class Lion extends Animal {
  constructor(name) {
    super(name);
    console.log(`Lion ${this.name} created`);
  }

  eats() {
    super.eats();
    console.log(`${this.name} is eating with a roar`);
  }
}

const animal = new Animal("Bunny");
animal.eats();
animal.jumps();

console.log("----------------");

const lion = new Lion("Shera");
lion.eats();
lion.jumps();
