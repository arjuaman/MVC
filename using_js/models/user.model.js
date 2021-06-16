// The first class built in this example is the application model, user.model.js, which consists of the class attributes, 
// and a private method that is generating random IDs (these id's could come from a database in the server).

/**
 * @class Model
 *
 * Manages the data of the application.
 */

 class User {
    constructor({ name, age, complete } = { complete: false }) {
      this.id = this.uuidv4();
      this.name = name;
      this.age = age;
      this.complete = complete;
    }
  
    uuidv4() {
      return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (
          c ^
          (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
        ).toString(16)
      );
    }
  }