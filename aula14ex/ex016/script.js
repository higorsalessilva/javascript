var inc = document.querySelector('input#inc')
var fim = document.querySelector('input#fim')
var pss = document.querySelector('input#pss')
var area = document.getElementsByTagName('div')[1]
function iniciar() {
    var i = Number(inc.value)
    var f = Number(fim.value)
    var p = Number(pss.value)
    
    if (i != 0 && f != 0 && p != 0) {
        area.innerHTML = 'Contando:<br>'
        while (i <= f) {
            area.innerHTML += `${i} &#X1F449;`
            i = i + p 
        }
        area.innerHTML += '&#X1F3C1'
    } else if (p == 0) {
        window.alert('Passo invalido! Considerando PASSO 1')
        area.innerHTML = 'Contando:<br>'
        while (i <= f) {
            area.innerHTML += `${i} &#X1F449;`
            i++ 
        }
        area.innerHTML += '&#X1F3C1'
    } else {
        area.innerHTML = 'Impossível contar!'
    }
}