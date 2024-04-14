
function jsnValidarDecimal(entrada)
{
    var valorRetorno = '';
    var valor = entrada.value;
    const lstVlr = valor.split('');
    
    for(let indice = 0; indice < lstVlr.length ; indice++)
    {
         var vlr1 = lstVlr[indice];
        if(indice == 1){
            vlr1 = vlr1.replace(/[^0-9,]/g, '');

            if(valor.includes(',') == false && vlr1 != '0'){
                vlr1 = (',' + vlr1);
            }
        }
        else{
            vlr1 = vlr1.replace(/[^0-9]/g, '');
        }        

        valorRetorno += vlr1;
    }
   
    if(parseFloat(valorRetorno.replace(',', '.')) >= 10)
    {
        console.log(valorRetorno);
        valorRetorno = "10,00";
    }    

    entrada.value = valorRetorno;
}


const entradas = document.querySelectorAll(".jsn-decimal");

entradas.forEach(item => {
    item.addEventListener("keyup", ()=>{ jsnValidarDecimal(item) });
});

entradas.forEach(function(input, index) {
    input.addEventListener("keydown", function(event) {
        // Verifica se a tecla pressionada é Enter (código 13)
        if (event.keyCode === 13) {
            // Impede o comportamento padrão do Enter (enviar o formulário)
            event.preventDefault();

            // Obtém o próximo input
            var nextIndex = index + 1;
            var nextInput = entradas[nextIndex];

            // Se houver um próximo input, foca nele
            if (nextInput) {
                nextInput.focus();
            }
        }
    });
});


