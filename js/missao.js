var checkboxConhecimento =  document.querySelectorAll("#conhecimento");
var objetivosConhecimento = 0;
var conhecimentoSelecionados = 0;
var checkboxExperiencia = document.querySelectorAll("#experiencia")
var objetivosExperiencia = 0;
var experienciaSelecionados = 0;

barraConhecimento()
barraExperiencia()

function barraConhecimento() {
    objetivosConhecimento = 0;
    checkboxConhecimento.forEach(function(totEl) {
        if (totEl) {
            objetivosConhecimento++;
        }
    })

    conhecimentoSelecionados = 0;
    checkboxConhecimento.forEach(function (el) {
        if (el.checked) {
            conhecimentoSelecionados++;
        }
    })

    var numConhecimentoSelecionados = Number(conhecimentoSelecionados);
    var numConhecimentoObjetivos = Number(objetivosConhecimento);
    var porcentagemConhecimentoConcluida = (100/numConhecimentoObjetivos) * numConhecimentoSelecionados;
    var porcentagemConhecimentoArredondada = porcentagemConhecimentoConcluida.toFixed(1);
    var porcentagemConhecimento = document.getElementById("porcentagemConhecimento")
    porcentagemConhecimento.innerHTML = porcentagemConhecimentoArredondada + "%";

    var barraConhecimento = document.querySelector("#subindo-barra-conhecimento")
    barraConhecimento.setAttribute("style", "height:" + porcentagemConhecimentoArredondada + "%;")
}

function barraExperiencia() {
    objetivosExperiencia = 0;
    checkboxExperiencia.forEach(function(totEl) {
        if (totEl) {
           objetivosExperiencia++;
        }
    })

    experienciaSelecionados = 0;
    checkboxExperiencia.forEach(function (el) {
        if (el.checked) {
            experienciaSelecionados++;
        }
    })

    var numExperienciaSelecionados = Number(experienciaSelecionados);
    var numExperienciaObjetivos = Number(objetivosExperiencia);
    var porcentagemExperienciaConcluida = (100/numExperienciaObjetivos) * numExperienciaSelecionados;
    var porcentagemExperienciaArredondada = porcentagemExperienciaConcluida.toFixed(1);
    var porcentagemExperiencia = document.getElementById("porcentagemExperiencia");
    porcentagemExperiencia.innerHTML = porcentagemExperienciaArredondada + "%"

    var barraExperiencia = document.querySelector("#subindo-barra-experiencia");
    barraExperiencia.setAttribute("style", "height:" + porcentagemExperienciaArredondada + "%")
}
