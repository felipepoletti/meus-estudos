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

let typeUndefined // undefined
console.log(typeUndefined);
console.log(typeof typeUndefined);

const languages = ['Javascript', 'C#', 'Python']; // arrays
console.log(languages);
console.log(typeof languages);

// arrays também são considerados objetos pelo javascript

const user = { //object
  email: 'felipepolettig@gmail.com', 
  password: 'P@ssw0rd', 
  username: 'felipepoletti', 
  age: 22
};
console.log(user);
console.log(typeof user);

// métodos de string
const fullname = 'Felipe Poletti Garcia';

const stringToArray = fullname.split(' '); // separa o texto e coloca em uma lista, o separador foi o espaço em branco

console.log(fullname.length); // contar caracteres

console.log(fullname.toLowerCase); // deixa todo texto em letra minúscula

console.log(fullname.toUpperCase); // deixa todo texto em letra maiúscula

console.log(fullname.indexOf('Poletti')); // retorna a posição em que o elemento está na string 

console.log(fullname.slice(0, 5)); // Extrai a string de acordo com a posição passada por parâmetro 

// métodos de array
const list = ['a', 'b', 'c', 'd', 'e']; 
/* quando criado uma lista como const, é possível atribuir mais valores a ela. 
o que não pode seria transformar uma lista em object por exemplo */

console.log(list.length); // conta o numero de elementos

console.log(list[2]); // acessar uma posição da lista

list[5] = 'f'; // atribuir mais um item na lista
console.log(list);

console.log(list[list.length - 1]); // obter o ultimo elemento da lista

list.push('g'); // adiciona um elemento ao fim da lista

list.pop(); // remove o ultimo elemento da lista

list.shift(); // remove o primeiro elemento

list.unshift('a'); // adiciona um elemento no inicio da lista

// objetos
const product = {
  name: 'Camisa',
  price: 15.99,
  inStock: true,
  sizes: ['P', 'M', 'G'],
  'Main color': 'Blue', 
};

console.log(product.name); // acessando um elemento do objeto

console.log(product['Main color']); // outra forma de acessar elementos do objeto. não muito utilizado

// destructuring (arrays e objetos)
const {price, inStock} = product;

/* ao invés de:
  const price = product.price;
  const inStock = product.inStock;
*/

console.log(price);
console.log(inStock);

const [n1, n2] = list;

console.log(n1);
console.log(n2);

// JSON - Javascript Object Notation
const dog = {
  name: 'Dwight',
  age: 10
};

const json = JSON.stringify(dog); // converte o objeto para json
console.log(json);

const obj = JSON.parse(json); // converte o JSON para um objeto javascript
console.log(obj);

/* Regras JSON
  Deve ser envolvido por chaves,
  As aspas devem ser DUPLAS
*/

// Estruturas condicionais
const a = 10;

if (a > 8) {
  console.log('A é maior que 8');
};

const b = 'Felipe';

// o === valida se o valor & tipo são iguais

if (b === 'João') {
  console.log('O nome é João');
}
else if (b === 'Pedro')
{
  console.log('O nome é Pedro');
}
else {
  console.log('O nome não foi encontrado.');
};

const someNumber = 14;

// if ternário
let testingANumber = someNumber < 20 ? 'Yes' : 'No'; // if ? se true retorna : else

// Estruturas de repetição
const myList = [1, 2, 3, 4, 5];
let counter = 0;

while(counter < myList.length) {
  console.log(myList[counter])
  counter++;
}

for(let counter = 0; counter < myList.length; counter++) {
  console.log(`Imprimindo: ${myList[counter]}`);
}

// métodos de array em repetição
const names = ['Matheus', 'Felipe', 'Dimitri', 'Eric'];

names.forEach(function(name) {
  console.log(`O nome é: ${name}`);
});

const modifiedNames = names.map(function (name) {
  if (name === 'Felipe') {
    return name = 'Felipe Poletti';
  } else {
    return name;
  }
});

console.log(modifiedNames);

const bigNumbers = [1, 2, 3, 4, 5, 10, 100].filter(function (number) {
  return number >= 5;
});

console.log(bigNumbers);

const sumAll = [10, 20, 30, 40, 50].reduce(function (total, number) {
  return total + number;
});

console.log(sumAll);

// funções
function myFunction() {
  console.log('Hello World!');
} 

myFunction();

function nomeCompleto(nome, sobrenome) {
  return `O nome completo é: ${nome} ${sobrenome}`;
}

console.log(nomeCompleto('Felipe', 'Poletti'));

// arrow function
const myArrowFunction = (a, b) => {
  return a + b;
};

console.log(myArrowFunction(6, 7));

// geralmente se usa arrow function para operaçoes rapidas

const mySimpleArrowFunction = (a, b) => a + b;

console.log(mySimpleArrowFunction(5, 5));