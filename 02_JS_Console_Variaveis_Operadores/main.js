console.log('Hallo Welt!');
console.error('Essa é uma mensagem de erro');
console.warn('Essa é uma mensagem de aviso!');

//Let, const
console.clear();
let idade = 30;
const nome = 'Hans'
console.log(nome);
console.log(idade);
idade = 31;
console.log(idade);

//String, Numbers, BooLean, Null, Undefined
console.clear();
const nome_pessoa = 'Kraut';

const idade1 = 30;
const rating = 4.5;
const isColl = true;
const x = null;
const y = undefined;
let z;

console.log(typeof nome_pessoa); //Tipo de const
console.log(typeof idade1);
console.log(typeof rating);
console.log(typeof isCool);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);

//Concatenar Strings
console.clear();
const pessoa = 'Ivan'
const idade2 = 21;
console.log(`Meu nome é ${pessoa} e eu tenho ${idade2} anos!`);

//Operadores de comparção e Lógico
console.clear();
let teste1 = 1;
let teste2 = 0;
let valor1 = true;
let valor2 = false;

console.log (teste1 > teste2); //Operador de comparação
console.log (teste1 < teste2); //Operador de comparação
console.log (teste1 && teste2); //Operador Lógico
console.log (valor1 && valor2); //Operador Lógico