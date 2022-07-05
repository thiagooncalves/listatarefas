
function Filtrar() {
  let inputFilter, filter, table, tr, tdTitulo, tdDescricao, indiceTarefas;
  inputFilter = document.getElementById("filtro-tabela");
  filter = inputFilter.value.toUpperCase();
  if (filter.length >= 1 && filter.length <= 3 ) return
  table = document.getElementById("tabela-dados");
  tr = table.getElementsByTagName("tbody")[0].rows;
  for (indiceTarefas = 0; indiceTarefas < tr.length; indiceTarefas++) {
    tdTitulo = tr[indiceTarefas].getElementsByTagName("td")[0];
    tdDescricao = tr[indiceTarefas].getElementsByTagName("td")[1];
    if (tdTitulo) {
      if (tdTitulo.innerHTML.toUpperCase().indexOf(filter) > -1 || tdDescricao.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[indiceTarefas].style.display = "";
      } else {
        tr[indiceTarefas].style.display = "none";
      }
    }       
  }
}


function Filtrar() {
let inputFilter;
inputFilter = document.getElementById("filtro-tabela");
filter = inputFilter.value.toUpperCase();
if (filter.length >= 1 && filter.length <= 3 ) return
var tarefasFiltradas = tarefas.filter(function(obj){ return (obj.titulo.toUpperCase().indexOf(filter) > -1 || obj.descricao.toUpperCase().indexOf(filter) > -1); });
renderizaTabela(tarefasFiltradas);
}
