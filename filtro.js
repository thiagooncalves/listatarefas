
function Filtrar() {
    var input, filter, table, tr, td, i;
    input = document.getElementById("filtro-tabela");
    filter = input.value.toUpperCase();
    table = document.getElementById("tabela-dados");
    tr = table.getElementsByTagName("tbody")[0].rows;
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0, 1];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }
