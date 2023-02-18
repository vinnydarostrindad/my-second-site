var checkboxConhecimento =  document.querySelectorAll("#conhecimento");
var objetivosConhecimento = 0;
var conhecimentoSelecionados = 0;
var checkboxExperiencia = document.querySelectorAll("#experiencia")
var objetivosExperiencia = 0;
var experienciaSelecionados = 0;
var largura = window.innerWidth;

barraConhecimento()
barraExperiencia()

window.addEventListener('resize', function () {
    barraConhecimento()
    barraExperiencia()
})


function barraConhecimento() {
    var largura = window.innerWidth;
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

    if (largura > 1240) {
        var numConhecimentoSelecionados = Number(conhecimentoSelecionados);
        var numConhecimentoObjetivos = Number(objetivosConhecimento);
        var porcentagemConhecimentoConcluida = (100/numConhecimentoObjetivos) * numConhecimentoSelecionados;
        var porcentagemConhecimentoArredondada = porcentagemConhecimentoConcluida.toFixed(1);
        var porcentagemConhecimento = document.getElementById("porcentagemConhecimento")
        porcentagemConhecimento.innerHTML = porcentagemConhecimentoArredondada + "%";

        var barraConhecimento = document.querySelector("#subindo-barra-conhecimento")
        barraConhecimento.setAttribute("style", "height:" + porcentagemConhecimentoArredondada + "%;")
    } else if (largura < 1241) {
        var numConhecimentoSelecionados = Number(conhecimentoSelecionados);
        var numConhecimentoObjetivos = Number(objetivosConhecimento);
        var porcentagemConhecimentoConcluida = (100/numConhecimentoObjetivos) * numConhecimentoSelecionados;
        var porcentagemConhecimentoArredondada = porcentagemConhecimentoConcluida.toFixed(1);
        var porcentagemConhecimento = document.getElementById("porcentagemConhecimento")
        porcentagemConhecimento.innerHTML = porcentagemConhecimentoArredondada + "%";

        var barraConhecimento = document.querySelector("#subindo-barra-conhecimento")
        barraConhecimento.setAttribute("style", "width:" + porcentagemConhecimentoArredondada + "%;")
    }
    
}

function barraExperiencia() {
    var largura = window.innerWidth;
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

    if (largura > 1240) {
        var numExperienciaSelecionados = Number(experienciaSelecionados);
        var numExperienciaObjetivos = Number(objetivosExperiencia);
        var porcentagemExperienciaConcluida = (100/numExperienciaObjetivos) * numExperienciaSelecionados;
        var porcentagemExperienciaArredondada = porcentagemExperienciaConcluida.toFixed(1);
        var porcentagemExperiencia = document.getElementById("porcentagemExperiencia");
        porcentagemExperiencia.innerHTML = porcentagemExperienciaArredondada + "%"

        var barraExperiencia = document.querySelector("#subindo-barra-experiencia");
        barraExperiencia.setAttribute("style", "height:" + porcentagemExperienciaArredondada + "%")
    } else if (largura < 1241) {
        var numExperienciaSelecionados = Number(experienciaSelecionados);
        var numExperienciaObjetivos = Number(objetivosExperiencia);
        var porcentagemExperienciaConcluida = (100/numExperienciaObjetivos) * numExperienciaSelecionados;
        var porcentagemExperienciaArredondada = porcentagemExperienciaConcluida.toFixed(1);
        var porcentagemExperiencia = document.getElementById("porcentagemExperiencia");
        porcentagemExperiencia.innerHTML = porcentagemExperienciaArredondada + "%"

        var barraExperiencia = document.querySelector("#subindo-barra-experiencia");
        barraExperiencia.setAttribute("style", "width:" + porcentagemExperienciaArredondada + "%")
    }
    
}
