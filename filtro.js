var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {
    var tarefas = document.querySelectorAll(".tarefas");

    if (this.value.length > 0) {
        for (var i = 0; i < tarefas.length; i++) {
            var tarefa = tarefas[i];
            var tdNome = tarefa.querySelector("td");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i");

            if (!expressao.test(nome)) {
                tarefa.classList.add("invisivel");
            } else {
                tarefa.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < tarefas.length; i++) {
            var tarefa = tarefas[i];
            tarefa.classList.remove("invisivel");
        }
    }
});
