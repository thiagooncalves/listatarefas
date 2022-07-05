function Filtrar() {
  let inputFilter;
  inputFilter = document.getElementById("filtro-tabela");
  filter = inputFilter.value.toUpperCase();
  if (filter.length >= 1 && filter.length <= 3 ) return
  var tarefasFiltradas = tarefas.filter(function(obj){ return (obj.titulo.toUpperCase().indexOf(filter) > -1 || obj.descricao.toUpperCase().indexOf(filter) > -1); });
  renderizaTabela(tarefasFiltradas);
}
