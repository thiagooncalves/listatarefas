function contar() {
    let inicio = document.getElementById('inputinicio')
    let fim = document.getElementById('inputfim')
    let passo = document.getElementById('inputpasso')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO] está faltando dados!')
    } else {
        res.innerHTML = '<strong>Contando:</strong> '
        let start = Number(inicio.value)
        let end = Number(fim.value)
        let step = Number(passo.value)

        for(let contador = start; contador <= end; contador += step) {
            res.innerHTML += `${contador} | `
        }
        res.innerHTML += `\u{1F44F} \u{1F4A5}`
}
}