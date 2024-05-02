var Leonardo = window.document.getElementById('Leonardo')
var Samantha = window.document.getElementById('Samantha')
var Bruna = window.document.getElementById('Bruna')

var seta_esquerda = window.document.getElementById('seta-esquerda')
var seta_direita = window.document.getElementById('seta-direita')

function rolarParaDireita(){
    Leonardo.style = "display:none"
    Bruna.style = "display:flex"
    seta_direita.style = "display:none"
    seta_esquerda.style = "display:flex"
}

function rolarParaEsquerda(){
    Bruna.style = "display:none"
    Leonardo.style = "display:flex"
    seta_direita.style = "display:flex"
    seta_esquerda.style = "display:none"
}