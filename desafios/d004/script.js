var str = document.getElementsByTagName('input')[0]
str.addEventListener('click', iniciar)

function iniciar() {
    var nome = window.prompt('Que produto você está comprando?')
    var custo = Number(window.prompt(`Quanto custa ${nome} que você está comprando?`))
    var din = Number.parseFloat(window.prompt(`Qual foi o valor que você deu para pagar ${nome}?`))
    var troco = (din - custo).toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})
   
    window.alert(`Você comprou ${nome} que custou ${custo.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.\nDeu R$ ${din.toFixed(2).replace('.',',')} em dinheiro e vai receber ${troco} de troco.\nVolte Sempre!`)
}