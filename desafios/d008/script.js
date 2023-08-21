function desc() {
    var prod = window.prompt('Qual é o produto que está comprando?')
    var prec = Number(window.prompt(`Qual é o preço do ${prod}?`))
    var area = document.getElementsByTagName('div')[0]
    var orig = prec.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})
    var desc = (prec*0.10).toLocaleString('pt-BR', {style:'currency', currency:'BRL'})
    var csto = (prec*0.90).toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

    area.innerHTML = `<h2>Calculando desconto de 10% para ${prod}</h2>
    <p>O preço original era ${orig}.</p>
    <p>Você acaba de ganhar ${desc} de desconto (-10%).</p>
    <p>No fim, você vai pagar ${csto} no produto ${prod}.</p>`
}