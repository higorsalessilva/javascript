function iniciar() {
    var anob = Number(window.prompt('Qual é o ano que você quer verificar?'))
    var area = document.getElementById('res')

    area.innerHTML = `<h2>Analisando o ano de ${anob}...</h2>`
    if ((anob % 4 == 0) && (anob % 100 != 0) || (anob % 400 == 0)) {
        area.innerHTML += `O ano de ${anob} <strong style="color:green; background-color:lightgreen;">É BISSEXTO</strong> &#9989;`
    } else {
        area.innerHTML += `O ano de ${anob} <strong style="color:darkred; background-color:#eb8686;">NÃO É BISSEXTO</strong> &#10060;`
    }
}