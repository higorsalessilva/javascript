var num = document.querySelector('input#num')
area = document.getElementsByTagName('select')[0]
function gerar() {
    var n = Number(num.value)
    if (n != null) {
        for (var m = 1; m <= 10; m++) {
            area.innerHTML += `<option>${n} x ${m} = ${n*m}</option>`
        }
    } else {
        window.alert('Por favor, digite um número!')
    }
}