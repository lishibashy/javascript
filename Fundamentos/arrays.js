// Utilizando forEach
//########################################################################

const aprovados = ['Fulano', 'Cicrano', 'Beltrano', 'Datrano', 'Eletrano']

aprovados.forEach(function(nome, indice){

    console.log(`${indice + 1}) ${nome}`)

})


// Utilizando forEach com Arrow Function
//########################################################################

aprovados.forEach(nome => console.log(nome))


// Exercicio utilizando forEach
Array.prototype.forEach2 = function(callback) {
    for (let index = 0; index < this.length; index++) {
      callback(this[index], index, this);
       
    }
}

const aprovados2 = ['Agatha', 'Aldo', 'Daniel', 'Raquel']


aprovados2.forEach2(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})


// Utilizando Filter
//########################################################################

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plastico', preco: 18.99, fragil: false}
]

console.log(produtos.filter(function(p){
    return false
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))

