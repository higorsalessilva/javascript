function iniciar() {
    var vlr1 = Number(window.prompt('Qual era o preço anterior do produto?'))
    var vlr2 = Number(window.prompt('Qual é o preço atual do produto?'))
    var area = document.querySelector('div#area')
    var vant = vlr1.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})
    var vdps = vlr2.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})

    area.innerHTML = `<h2>Analisando os valores informados</h2>
    <p>O produto custava ${vant} e agora custa ${vdps}.`

    if (vlr1 < vlr2) {
        var valr = (vlr2 - vlr1).toLocaleString('pt-BR', {style:'currency', currency:'BRL'})
        area.innerHTML += `<p>Hoje o produto está mais caro.</p>
        <p>O preço subiu ${valr} em relação ao preço anterior.</p>
        <p>Uma variação de ${((vlr2-vlr1)*100/vlr1).toFixed(1).replace('.',',')}% pra cima.</p>`        
    } else {
        var valr = (vlr1 - vlr2).toLocaleString('pt-BR', {style:'currency', currency:'BRL'})
        area.innerHTML += `<p>Hoje o produto está mais barato.</p>
        <p>O preço caiu ${valr} em relação ao preço anterior.</p>
        <p>Uma variação de ${((vlr1-vlr2)*100/vlr2).toFixed(2).replace('.',',')}% pra baixo.`
    }
}