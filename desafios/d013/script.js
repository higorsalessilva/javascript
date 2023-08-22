function clique() {
    var nome = window.prompt('Qual é o nome do aluno?')
    var n1 = Number(window.prompt(`Primeira nota de ${nome}:`))
    var n2 = Number(window.prompt(`Segunda nota de ${nome}`))
    var md = (n1+n2)/2
    var area = document.querySelector('div#area')

    area.innerHTML = `<h2>Analisando a situação de ${nome}</h2>
    <p>Com as notas ${n1.toString().replace('.',',')} e ${n2.toString().replace('.',',')} a <strong>média é ${md.toString().replace('.',',')}</strong></p>`
    
    if (md > 6) {
        area.innerHTML += 'Com média acima de 6,0, o aluno está <strong style="color:green; background:#85f785">APROVADO</strong>'
    } else if (md >= 3) {
        area.innerHTML += 'Com média entre 3,0 e 6,0, o aluno está em <strong style="color:orangered; background:#ffff6d;">RECUPERAÇÂO</strong>'
    } else {
        area.innerHTML += 'Com média abaixo de 3,0, o aluno está <strong style="color:darkred; background:#ff8989;">REPROVADO</strong>'
    }
    
}