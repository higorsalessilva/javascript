var inc = document.querySelector('input#inc')
var fim = document.querySelector('input#fim')
var area = document.getElementsByTagName('div')[1]
function iniciar() {
    var i = Number(inc.value)
    var f = Number(fim.value)
    while (i <= f) {
        area.innerHTML += `${i}`
        i++
    }
}