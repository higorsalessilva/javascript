function iniciar() {
    var a = window.prompt('Qual é o valor de a?')
    var b = window.prompt('Qual é o valor de b')
    var c = window.prompt('Qual é o valor de c')
    var area = document.querySelector('div#res')
    var delta = b**2-4*a*c 

    area.innerHTML = `<h2>Resolvendo Bhaskara</h2>
    <p>A equação atual é <strong>${a}x<sup>2</sup> + ${b}x + ${c} = 0</strong></p>
    <p>O cálculo realizado será <strong>&Delta; = ${b}<sup>2</sup> - 4 . ${a} . ${c}</strong></p>
    <p>O valor calculado foi <mark><strong>&Delta; = ${delta}</strong></mark></p>`
}