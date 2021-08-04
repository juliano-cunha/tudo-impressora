
var formCalculoBasico = document.querySelector("#calculo-basico");
formCalculoBasico.addEventListener("submit", function(event) {
    event.preventDefault();

    const inpMedia = window.document.getElementById('inputMedia');
    const inpVlrToner = window.document.getElementById('inputVlrToner');
    const inpRendimento = window.document.getElementById('inputRendimento');
    
    
    var valorInpMedia = inpMedia.value;
    var valorInpVlrToner = inpVlrToner.value;
    var valorInpRendimento = inpRendimento.value;

      
  
        var custoPagina = calculaCustoPagina(valorInpVlrToner, valorInpRendimento); 
        var custoMes = calculaCustoMes(custoPagina, valorInpMedia);

        mostraResultado(custoPagina, custoMes);

});

function calculaCustoPagina(valorInpVlrToner, valorInpRendimento){

    var custoPagina = parseInt(valorInpVlrToner) / parseInt(valorInpRendimento);
    return custoPagina;
    
};

function calculaCustoMes(custoPagina, valorInpMedia){

    var custoMes = custoPagina * parseInt(valorInpMedia);
    return custoMes;

};

var displayResultado = document.getElementById('dispResultado').style.display;

function mostraResultado(custoPagina, custoMes) {          
    if(displayResultado != 'block') {
        document.getElementById('dispResultado').style.display = 'block';

        custoPaginaResultado.innerHTML = custoPagina.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        custoMensalResultado.innerHTML = custoMes.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        
    }else {
    
    }
};

function limpaResultado() {
    var displayResultado = document.getElementById('dispResultado').style.display;

    if(displayResultado != "none") {
        document.getElementById('dispResultado').style.display = 'none';
    } else {
        document.getElementById('dispResultado').style.display = '';

    }
};
function transformReal(i) {
    var v = i.value.replace(/\D/g,'');
	v = (v/100).toFixed(2) + '';
	v = v.replace(".", ",");
	v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
	v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");
	i.value = v;
}

