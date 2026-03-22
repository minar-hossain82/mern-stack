class Animal {
  constructor(name) {
    this.name = name;
    console.log("Object created");
  }

  eats() {
    console.log("Eating");
  }

  jumps() {
    console.log("Jumping");
  }
}

class Lion extends Animal {
  constructor(name) {
    super(name);
    console.log("Object created: Lion");
  }

  eats() {
    super.eats();
    console.log("Eating with roar");
  }
}

const animal = new Animal("Bunny");
console.log(animal);

const lion = new Lion("Shera");
console.log(lion);
