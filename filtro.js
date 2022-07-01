
function Filtrar() {
  var input, filter, table, tr, tdCol1, tdCol2, i;
  input = document.getElementById("filtro-tabela");
  filter = input.value.toUpperCase();
  table = document.getElementById("tabela-dados");
  tr = table.getElementsByTagName("tbody")[0].rows;
  for (i = 0; i < tr.length; i++) {
    tdCol1 = tr[i].getElementsByTagName("td")[0];
    tdCol2 = tr[i].getElementsByTagName("td")[1];
    if (tdCol1) {
      if (tdCol1.innerHTML.toUpperCase().indexOf(filter) > -1 || tdCol2.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
