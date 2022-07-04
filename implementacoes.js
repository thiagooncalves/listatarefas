const formulario = document.getElementById("form-principal");
const tabela = document.getElementById("table_body");
let tarefas = [];
let tarefaCorrente = null
if (tarefas.length === 0) {
    renderizaTabela()
}

// negação é somente o símbolo de exclamação(!)
// diferente é somente símbolo de exclamação e igual juntos(!=)
// diferente é somente símbolo de exclamação e igual+igual juntos(!==) diferente no valor e tipo
// verifica se o valor e o tipo dos dados são iguais (===) e (==) só checa se os valores são iguais

formulario.addEventListener("submit" , e => {
    e.preventDefault()
    tarefaCorrente || tarefaCorrente === 0 ?
        salvarTarefa(tarefaCorrente, formulario.elements.titulo.value, formulario.elements.descricao.value) 
        :
        adicionaTarefas(formulario.elements.titulo.value, formulario.elements.descricao.value)
    renderizaTabela()
    limparFormulario()
})

function salvarTarefa(idx, titulo, descricao) {
    tarefas[idx].titulo = titulo
    tarefas[idx].descricao = descricao
    tarefaCorrente = null
    limparFormulario()
}

function adicionaTarefas(titulo, descricao) {
    tarefas = [...tarefas, {titulo: titulo, descricao: descricao}]
    localStorage.setItem("tarefas", JSON.stringify(tarefas))

}

function criaLinha() {
    return document.createElement("tr")
}

function criaColuna() {
    return document.createElement("td")
}

function criaBotao() {
    return document.createElement("button")
}

function inserirTextoBotao(botao, texto) {
    botao.innerText = texto
    return botao
}

function inserirTextoColuna(coluna, texto) {
    coluna.innerText = texto
    return coluna
}

function removerTarefa(idx) {
    tarefas.splice(idx, 1)
    renderizaTabela()
}

function recuperaDados() {
    if (localStorage.getItem("tarefas").length) {
        const tarefas = JSON.parse(localStorage.getItem("tarefas"))
        tarefas.forEach((tarefa) => {
            adicionaTarefas(tarefa.titulo, tarefa.descricao)
        })
    }
}

function renderizaTabela() {
    tabela.innerText = "";

if (tarefas.length === 0) {
    recuperaDados()
}

    tarefas.forEach((tarefa, index) => {
        const linha = criaLinha()
        let colunaTitulo = criaColuna()
        let colunaDescricao = criaColuna()
        let colunaBotao = criaColuna()
        let botaoExcluir = criaBotao()
        let botaoEditar = criaBotao()
        colunaTitulo = inserirTextoColuna(colunaTitulo, tarefa.titulo)
        colunaDescricao = inserirTextoColuna(colunaDescricao, tarefa.descricao)
        botaoExcluir = inserirTextoBotao(botaoExcluir, "Delete")
        botaoEditar = inserirTextoBotao(botaoEditar, "Edit")
        botaoExcluir.addEventListener("click", (e) => {
            e.stopPropagation()
            removerTarefa(index)
        })
        botaoEditar.addEventListener("click", (e) => {
            e.stopPropagation()
            editarTarefa(index)
        })
        colunaBotao.appendChild(botaoEditar)
        colunaBotao.appendChild(botaoExcluir)
        linha.appendChild(colunaTitulo)
        linha.appendChild(colunaDescricao)
        linha.appendChild(colunaBotao)
        tabela.appendChild(linha)
    })
}

function limparFormulario() {
    formulario.elements.titulo.value = "";
    formulario.elements.descricao.value = "";
}

function editarTarefa(idx) {
    let tarefaAtual = tarefas[idx]
    tarefaCorrente = idx;
    formulario.elements.titulo.value = tarefaAtual.titulo
    formulario.elements.descricao.value = tarefaAtual.descricao
}