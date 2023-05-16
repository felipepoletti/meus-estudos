// console
console.log('This is a message in javascript');
console.error('This is an error in javascript');
console.warn('This is a warning in javascript');

// variáveis
var x = 10; // não se usa mais
let y = 15;
const z = 20;

/*
  Em constantes não é possível reatribuir valores, em let sim.- 
*/

// tipos de dados
const name = 'Felipe Poletti'; // text
console.log(name);
console.log(typeof name);

const age = 22; // number
console.log(age);
console.log(typeof age);

/* 
 javascript não possui diferenciação entre números
 a variável abaixo também é considerada number
*/

const decimal = 13.5; // number
console.log(decimal);
console.log(typeof decimal);

const isApproved = true; // bool (true ou false)
console.log(isApproved);
console.log(typeof isApproved);

let surname = null; // null (object)
console.log(surname);
console.log(typeof surname);

// muitos dados em javascript são considerado objetos, null é um deles

let undefined // undefined
console.log(undefined);
console.log(typeof undefined);

const languages = ['Javascript', 'C#', 'Python']; // arrays
console.log(languages);
console.log(typeof languages);

// arrays também são considerados objetos pelo javascript

const user = { //object
  email: 'felipepolettig@gmail.com', 
  password: 'P@ssw0rd', 
  username: 'felipepoletti', 
  age: 22
}
console.log(user);
console.log(typeof user);