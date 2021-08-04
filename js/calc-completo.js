var inpRendimentoCilindroP
var formCalculoCompleto = document.querySelector("#calculo-completo");
formCalculoCompleto.addEventListener("submit", function(event){

        event.preventDefault();

        var inpQtdMedia = window.document.getElementById('inputMediaCompleto');
        
        var inpRendimentoTonerP = window.document.getElementById('inputTpRendimento');
        var inpRendimentoTonerC = window.document.getElementById('inputTcRendimento');
        var inpRendimentoCilindroP = window.document.getElementById('inputCpRendimento');
        var inpRendimentoCilindroC = window.document.getElementById('inputCcRendimento');
        var inpRendimentoFusor = window.document.getElementById('inputFusorRendimento');
        var inpRendimentoPapel = window.document.getElementById('inputPapelRendimento');
        
        var inpValorTonerP = window.document.getElementById('inputTpValor');
        var inpValorTonerC = window.document.getElementById('inputTcValor');
        var inpValorCilindroP = window.document.getElementById('inputCpValor');
        var inpValorCilindroC = window.document.getElementById('inputCcValor');
        var inpValorFusor = window.document.getElementById('inputFusorValor');
        var inpValorPapel = window.document.getElementById('inputPapelValor');
            

        
        var qtdeMediaCompleto = inpQtdMedia.value;

        
        var rendimentoTonerPreto = inpRendimentoTonerP.value;
        var rendimentoTonerColorido = inpRendimentoTonerC.value;
        var rendimentoCilindroPreto = inpRendimentoCilindroP.value;
        var rendimentoCilindroColorido = inpRendimentoCilindroC.value;
        var rendimentoFusor = inpRendimentoFusor.value;
        var rendimentoPapel = inpRendimentoPapel.value;
        
        var valorTonerPreto = inpValorTonerP.value;
        var valorTonerColorido = inpValorTonerC.value;
        var valorCilindroPreto = inpValorCilindroP.value;
        var valorCilindroColorido = inpValorCilindroC.value;
        var valorFusor = inpValorFusor.value;
        var valorPapel = inpValorPapel.value;
       
        var custoPaginaTonerPreto = calculaCustoPagina(valorTonerPreto, rendimentoTonerPreto);
        var custoPaginaTonerColorido = calculaCustoPaginaColorido(valorTonerColorido, rendimentoTonerColorido);
        var custoPaginaCilindroPreto = calculaCustoPagina(valorCilindroPreto, rendimentoCilindroPreto);
        var custoPaginaCilindroColorido = calculaCustoPaginaColorido(valorCilindroColorido, rendimentoCilindroColorido);
        var custoPaginaFusor = calculaCustoPagina(valorFusor, rendimentoFusor);
        var custoPaginaPapel = calculaCustoPagina(valorPapel, rendimentoPapel);
        
    
        
        var custoTotalPagina = calculaCustoPaginaTotal(custoPaginaTonerPreto, custoPaginaTonerColorido, custoPaginaCilindroPreto, custoPaginaCilindroColorido, custoPaginaFusor, custoPaginaPapel);
        var custoTotalMensal = calculaCustoTotalMensal(custoTotalPagina, qtdeMediaCompleto);

        
        mostraResultado(custoTotalPagina, custoTotalMensal);


});


function calculaCustoPagina(valor, rendimento){
   
    let custoPagina = parseInt(valor) / parseInt(rendimento);
    
    if (isNaN(custoPagina)){
        custoPagina = 0;
        return custoPagina;
    }else{
        return custoPagina;
    }
    
}


function calculaCustoPaginaColorido(valor, rendimento){

    let custoPaginaColorido = parseInt(valor) / parseInt(rendimento) * 3;
    if (isNaN(custoPaginaColorido)){
        custoPaginaColorido = 0;
        return custoPaginaColorido;
    }else{
        return custoPaginaColorido;
    }
}


function calculaCustoPaginaTotal(tonerPreto, tonerColorido, cilindroPreto, cilindroColorido, fusor, papel){
    let custoTotalPagina = tonerPreto + tonerColorido + cilindroPreto + cilindroColorido + fusor + papel;   
    
    return custoTotalPagina;
}


function calculaCustoTotalMensal(custoTotalPagina, quantidadeMensal){
    let custoMensal = custoTotalPagina * parseInt(quantidadeMensal);

    return custoMensal;
}
        

var displayResultado = document.getElementById('dispResultado').style.display;

function mostraResultado(custoTotalPagina, custoTotalMensal) {          
    if(displayResultado != 'block') {
        document.getElementById('dispResultado').style.display = 'block';

        custoPaginaTotalResultado.innerHTML = custoTotalPagina.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        custoMensalTotalResultado.innerHTML = custoTotalMensal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        
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