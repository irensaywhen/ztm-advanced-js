// inline caching
function findUser(user) {
  return `found ${user.firstName} ${user.lastName}`;
}

const userData = {
  firstName: 'John',
  lastName: 'Doe',
};

// Whenever you call a function multiplle times
// with the same argument
// it will be replaced to the result of execution

findUser(userData); // will be replaced with 'found John Doe'

// hidden classes
function Animal(x, y) {
  this.x = x;
  this.y = y;
}

const obj1 = new Animal(1, 2);
const obj2 = new Animal(3, 4);

// deoptimization
// compiler starts to think these objects are two different things
// assign all the properties in the constructor
// or at least add things in the same order
obj1.a = 30;
obj1.b = 100;
obj2.b = 30;
obj2.a = 100;

/**
 * Recourses
 * =========
 * Article on inline caching and hidden classes https://richardartoul.github.io/jekyll/update/2015/04/26/hidden-classes.html
 * Hash functions https://en.wikipedia.org/wiki/Hash_function
 * Java j,jects in memory https://www.programcreek.com/2011/11/what-do-java-objects-look-like-in-memory/
 * Offset (computer science) https://en.wikipedia.org/wiki/Offset_%28computer_science%29
 * What is inline caching? https://github.com/sq/JSIL/wiki/Optimizing-dynamic-JavaScript-with-inline-caches
 * AST explorer https://astexplorer.net/
 * V8 hidden classes https://engineering.linecorp.com/en/blog/v8-hidden-class/
 * Difference between byte code and machine code Java https://www.geeksforgeeks.org/difference-between-byte-code-and-machine-code/
 */
