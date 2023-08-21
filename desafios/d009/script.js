function reaj() {
    var nome = window.prompt('Qual é o nome do funcionário?')
    var salr = Number(window.prompt(`Qual é o salário de ${nome}?`))
    var rjus = Number(window.prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`))
    var aumt = salr*(rjus*0.01)
    var nsal = (salr + aumt).toLocaleString('pt-BR', {style:'currency', currency:'BRL'})
    var area = document.querySelector('div')
    var salr = salr.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})
    var aumt = aumt.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})
    
    area.innerHTML = `<h2>${nome} recebeu um aumento salarial!</h2>
    <p>O salário atual era ${salr}.</p>
    <p>Com um aumento de ${rjus}%, o salário vai aumentar ${aumt} no próximo mês.</p>
    <p>E a partir dai, ${nome} vai passar a ganhar ${nsal}</p>`
}