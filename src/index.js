let table;

//https://datatables.net/reference/option/
//https://datatables.net/examples/index

window.loadTable = (json) => {
  const columns = [
    {title: "First Name", data: "firstName", orderable: false},
    {title: "Last Name", data: "lastName"},
    {title: "Position", data: "position", visible: true}, 
    {title: "Age", data: "age", searchable: false},
  ];
  const data = [
    {firstName: "Deborah", lastName: "Norton", position: "Mom", age: "50"},
    {firstName: "Justin", lastName: "Kertson", position: "Dad", age: "42"},
    {firstName: "Reeve", lastName: "Bushman", position: "Son", age: "26"},
    {firstName: "Odo", lastName: "Norton-Kertson", position: "Dog", age: "1"},
    {firstName: "Dobby", lastName: "Norton-Kertson", position: "Cat", age: "2"},

  ];
  table = $("#dtable").DataTable({
    //paging: false,
    //searching: false,
    //ordering: false,
    columns: columns,
    data: data,
  });
};
