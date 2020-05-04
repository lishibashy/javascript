function adicionar(){
    
    var num = window.document.getElementById('num');
    let tab = window.document.getElementById( 'selnum' );

    
    if ( num.value.length == 0 || num.value <= 0 || num.value > 100 ){
        window.alert('Digite um valor valido.')
    }   
        else{
        
            let n = Number(num.value);
            let narray = [];
            if (narray.indexOf(n) > -1) {
                console.log(narray[n]);
                window.alert('Número já cadastrado');
              } else {
                console.log(n);
                narray.push(n);
              }
            

            for (let index = 0; index < narray.length; index++) {

            let item = document.createElement('option');
            item.text = `Valor adicionado: ${narray[index]}`;
            item.value = narray[index];
            tab.appendChild(item)
            
        }        
    }

}

//var cars = document.getElementById("cars");
//var carSelected = cars.options[cars.selectedIndex].value;

function analisar(){

    let select = window.document.getElementById( 'selnum' );
    let teste = [];


         //console.log(select.options[0].value); 
        qtde.innerHTML = `Qtde de números: ${select.options.length}`;
        console.log(`Qtde: ${select.options.length}` ); 

        maior.innerHTML = `Maior valor: ${ArrayMax(select.options)}`;
        console.log(`Maior: ${ArrayMax(select.options)}` );

        menor.innerHTML = `Menor valor: ${ArrayMin(select.options)}`;
        console.log(`Menor: ${ArrayMin(select.options)}` );

        soma.innerHTML = `Soma dos números: ${somarValores(select.options)}`;
        console.log(`Soma: ${somarValores(select.options)}` );

        media.innerHTML = `Média dos valores: ${mediaValores(select.options)}`;
        console.log(`Media: ${mediaValores(select.options)}` );


        // Funcao para retornar o menor valor de um array
        function ArrayMin(array) {
            
            for (var i=0; i<select.length; i++){
                teste[i] = parseInt(select[i].value);      
            }
            return Math.min.apply(Math, teste);
        };

        // Funcao para retornar o maior valor de um array
        function ArrayMax(array) {
            
            for (var i=0; i<select.length; i++){
                teste[i] = parseInt(select[i].value);      
            }
            return Math.max.apply(Math, teste);
        };

        function somarValores(){
            var soma = 0;
        
            for (var i=0; i<select.length; i++){
                    teste[i] = parseInt(select[i].value);      
                    soma += parseInt(teste[i]);
            }
            return soma;    
        }

        function mediaValores(){
            var total = 0;
        
            for (var i=0; i<select.length; i++){
                    teste[i] = parseInt(select[i].value);      
                    total += parseInt(teste[i]);
            }
            var avg = total / select.length;
            return avg;    
        }
    
   


}


