function iniciar() {
    let ini = document.getElementById('inc')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('pss')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        //window.alert('[ERRO] Faltam dados!')        
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
         res.innerHTML += `\u{1F3C1}`
    }
}


/*
 MEU CODIGO
var inc = document.querySelector('input#inc')
var fim = document.querySelector('input#fim')
var pss = document.querySelector('input#pss')
var area = document.getElementsByTagName('div')[1]
function iniciar() {
    var i = Number(inc.value)
    var f = Number(fim.value)
    var p = Number(pss.value)

    area.innerHTML = 'Contando: <br>'
    if (i === 0 || f === 0) {
        area.innerHTML = 'Impossível contar!'
    } else if (p === 0) {
        window.alert('Passo invalido! Considerando PASSO 1')
        if (i < f) {
            while (i <= f) {
                area.innerHTML += `${i} &#X1F449;`
                i++
            }
            area.innerHTML += '&#X1F3C1;'
        } else {
            while (i >= f) {
                area.innerHTML += `${i} &#X1F449;`
                i--
            }
            area.innerHTML += '&#X1F3C1;'
        }
    } else if (i < f) {
        do {
            area.innerHTML += `${i} &#X1F449;`
            i = i + p
        } while (i <= f)
        area.innerHTML += '&#X1F3C1;'
    }  else {
        for (i; i >= f; i = i - p) {
            area.innerHTML += `${i} &#X1F449;`
        }
        area.innerHTML += '&#X1F3C1;'
    }
}   
*/