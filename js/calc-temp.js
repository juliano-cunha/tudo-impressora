
var formCalcularTempoImpressao = document.querySelector("#calculo-tempo-impressao");
formCalcularTempoImpressao.addEventListener("submit", function(event){
  
        event.preventDefault();

        const inpQtdNecessaria = window.document.getElementById('inputQtdeNecessaria');
        const inpQtdImpressora = window.document.getElementById('inputQtdeImpressoras');
        const inpVlcImpressora = window.document.getElementById('inputVlcImpressora');

        const valorInpQtdNecessária = inpQtdNecessaria.value;
        const valorInpQteImpressora = inpQtdImpressora.value;
        const valorInpVlcImpressora = inpVlcImpressora.value;

        var tempoImpressao = calculaTempoImpressao(valorInpQtdNecessária, valorInpQteImpressora, valorInpVlcImpressora);

        mostraResultado(tempoImpressao);

});    
function calculaTempoImpressao (valorInpQtdNecessária, valorInpQteImpressora, valorInpVlcImpressora){

    var tempoImpressao = parseInt(valorInpQtdNecessária) / (parseInt(valorInpQteImpressora) * parseInt(valorInpVlcImpressora));

    return tempoImpressao;
}


var displayResultado = document.getElementById('dispResultado').style.display;

function mostraResultado(tempoImpressao) {          
    if(displayResultado != 'block') {
        document.getElementById('dispResultado').style.display = 'block';
        if(tempoImpressao < 60){
            console.log(tempoImpressao)
            resultadoTempoImpressao.innerHTML = tempoImpressao.toFixed(2) + " Minutos";
        }else if(tempoImpressao >= 60 && tempoImpressao < 1440){
            var horasImpressao = (tempoImpressao / 60);
            console.log(horasImpressao)
            resultadoTempoImpressao.innerHTML = horasImpressao.toFixed(2) + " Horas";
        }else if(tempoImpressao >= 1440){

            var diasImpressao = (tempoImpressao / 1440);
            console.log(diasImpressao)
            resultadoTempoImpressao.innerHTML = diasImpressao.toFixed(2) + " Dias";
        }
        
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
