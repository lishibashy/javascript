// Usando o bind
const pessoa = {
    saudacao : 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: Funcional e OO

//Como resolver ao chamar uma função com um objeto
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

// Usando o constante ex. self
function Pessoa(){
    this.idade = 0

    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }, 1000)
}

//new Pessoa

//Função Arrow

//Modo 1
let dobro = function (a) {
    return 2 * a
}

//Modo 2
dobro = (a) => {
    return 2 * a
}

//Modo 3 Utilizando Arrow
dobro = a => 2 * a //return implicito

console.log(dobro(Math.PI))


// Funções Anonimas

const soma = function (x, y) {
    return x + y
}

const imprimiResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimiResultado(3,4)
imprimiResultado(3, 4, soma)
imprimiResultado(3 ,4, function (x, y){
    return x - y
})

imprimiResultado(3, 4, (x,y) => x * y) //Arrow Function