function clique() {
    var mts = Number.parseFloat(window.prompt('Digite uma distância em metros (m)'))
    var area = document.getElementById('area')
    area.innerHTML = `<h2>A distância de ${mts.toFixed(2).replace('.',',')} metros, corresponde a...</h2> 
    <p>${(mts/1000).toLocaleString('pt-br')} quilômetros (Km)</p> 
    <p>${(mts/100).toLocaleString('pt-br')} hectômetros (Hm)</p>
    <p>${(mts/10).toLocaleString('pt-br')} decâmetros (Dam)</p>
    <p>${(mts*10).toLocaleString('pt-br')} decímetros (dm)</p>
    <p>${(mts*100).toLocaleString('pt-br')} centímetros (cm)</p>
    <p>${(mts*1000).toLocaleString('pt-br')} milímetros (mm)</p>`
}