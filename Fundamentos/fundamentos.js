//##############################################################
// Variaveis
//##############################################################

// JS tem 3 tipos de declaração de variaveis: var, let e const
// Sempre prefira utilizar o let

console.log('--------- Variáveis ----------')

var a = 3;

let b = 4;

var a = 30; //Utilizando a palavra reservada var não ocasiona erro

//let b = 40 - Isso ocasiona um erro pq já foi declarado usando a palavra reservada let
b =40;

console.log(a, b);

const c = 5;

//c = 50; Erro pq c foi declarado com constante

console.log(c);

//##############################################################
// Funções e Objetos
//##############################################################

console.log('--------- Funções e Objetos ----------')

console.log(typeof Object);  //Função
console.log(typeof new Object); //Objeto instanciado por uma função

const Cliente = function(){}
console.log(typeof Cliente)
console.log(typeof new Cliente) //Pode criar instancia definida atraves de função

class Produto {} //ES 2015 (ES6)
console.log(typeof Produto)
console.log(typeof new Produto()) //Pode criar instancia a partir de uma classe


//##############################################################
// Destructuring
//##############################################################

//Em um Objeto
const pessoa = {
    nome: 'Ana',
    idade: 15,
    endereco:{
        logradouro: 'Rua: ABC',
        numero: 150
    }
}

const { nome, idade} = pessoa

const { endereco: { logradouro, numero } } = pessoa;

console.log('--------- Destructuring ----------')

console.log (nome, idade);

console.log (logradouro, numero);

//Em um Array

const [teste] = [100] 
console.log (teste)