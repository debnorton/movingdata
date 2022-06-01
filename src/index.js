import { customerColumns, admissionsColumns} from "./columns";

let table;

//https://datatables.net/reference/option/
//https://datatables.net/examples/index

window.loadTable = (json) => {
  const obj = JSON.parse(json);
  const data = obj.data;
  const source = obj.source;
  
  const columns = source ==="Customers" ? customerColumns: admissionsColumns;

  table = $("#dtable").DataTable({
    //paging: false,
    //searching: false,
    //ordering: false,
    columns: columns,
    data: data,
  });
};
