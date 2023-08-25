function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
       window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10 ) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }

}


/* MEU CODIGO
var num = document.querySelector('input#num')
area = document.getElementsByTagName('select')[0]
function gerar() {
    var n = Number(num.value)
    if (n != null) {
        for (var m = 1; m <= 10; m++) {
            area.innerHTML += ` <option>${n} x ${m} = ${n*m}</option>`
        }
    } else {
        window.alert('Por favor, digite um número!')
    }
}
*/