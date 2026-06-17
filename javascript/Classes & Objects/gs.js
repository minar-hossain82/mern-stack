"use strict";

class User {
  #name;

  constructor(name) {
    this.name = name;
  }

  get name() {
    return this.#name;
  }

  set name(value) {
    if (typeof value !== "string" || value.trim().length < 4) {
      throw new Error("Name must be a string with at least 4 characters.");
    }

    this.#name = value.trim();
  }
}

try {
  const user = new User("John");

  console.log(user.name);

  user.name = "Harry";

  console.log(user.name);
} catch (error) {
  console.error(error.message);
}
