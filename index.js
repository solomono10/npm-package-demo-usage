const { joe, cat } = require("npm-package-demo");

const { name, age, gender, isAdult } = joe();

console.log(`My name is ${name}, ${gender}, ${age} and ${isAdult} that I'm an adult`);

// const { name, age, gender, isAdult } = cat();

// console.log(`My name is ${name}, ${gender}, ${age} and ${isAdult} that I'm an adult`);