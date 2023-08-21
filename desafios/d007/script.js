var cota = Number(window.prompt('Antes de mais nada. Quanto está a cotação do dólar agora?'))
var area = document.querySelector('div#area')

function conversor() {
    var real = Number(window.prompt('Quantos R$ você tem na carteira?'))
    var dol = (real / cota).toLocaleString('pt-BR', {style: 'currency', currency: 'USD'})
    var real = real.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    
    area.innerHTML = `<h2>Cotação do Dólar: ${cota.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</h2>
    <p>Você possui ${real}, que equivale á ${dol}</p>`
}