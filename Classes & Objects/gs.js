class User {
  constructor(name) {
    // Calls the setter method to initialize the name property
    this.name = name;
  }

  get name() {
    // Returns the internal _name value
    return this._name;
  }

  set name(value) {
    // Validates that the name has at least 4 characters
    if (value.length < 4) {
      console.log("Name is too short.");
      return; // Stops further execution without setting a new name
    }
    // Stores the valid name in a protected variable _name
    this._name = value;
  }
}

// Creates a new User object with a valid name
let user = new User("John");
console.log(user.name); // John

// Attempts to set a name that is too short, so setter rejects it
user.name = "Harry"; // Name is too short.
console.log(user.name); // John (previous value remains)
