function contar(){
    var inicio = window.document.getElementById('inicio');
    var fim = window.document.getElementById('final');
    var passo = window.document.getElementById('passo');
    var res = window.document.getElementById('res'); 
   
   if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
       window.alert('[ERRO] Faltam dados.')
   }
   else
   {
       res.innerHTML = `Contando: <br>`
       i = Number(inicio.value);
       f = Number(fim.value);
       p = Number(passo.value);
       if ( p <=0 ){
           window.alert('Passo invalido! Considerando passo = 1');
           p = 1;
       }
       if (i < f){
           //Contagem crescente
           for (var c = i; c <= f; c += p){
            res.innerHTML += `${c} \u{1F449}`;
            }
       }
       else{
           //Contagem regressiva
           for (var c = i; c >= f; c -= p){
            res.innerHTML += `${c} \u{1F449}`;
            }
       }
       res.innerHTML += `\u{1F3C1}`
   }
   
}
