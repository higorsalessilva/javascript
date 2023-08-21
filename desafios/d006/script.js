function clique() {
    var cel = window.prompt('Digite uma temperatura em °C (Celsius)')
    var kel = Number(cel) + 273.15
    var fah = 1.8 * cel + 32
    var area = document.getElementsByTagName('div')[0]
    area.innerHTML = `<h2>A temperatura de ${cel.replace('.',',')}°C, corresponde a...</h2>
    <p>${kel.toFixed(2).replace('.',',')}°K (Kelvin)</p>
    <p>${fah.toFixed(2).replace('.',',')}°F (Fahrenheit)</p>`
}