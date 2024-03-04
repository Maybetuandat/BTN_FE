function myFilter() {

  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("example");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function addTable()
{
  var headerData = ["Stt", "Tên", "Kỳ Thi", "Tham Gia", "Hoàn Thành", "Điểm Trung Bình"];
  var data = [
    ["1", "Nguyễn Anh Quân", "Giữa kì", "3", "80", "9"],
    ["2", "Nguyễn Hoàng Hiệp", "Giữa kì", "4", "100", "2"],
    ["2", "Trịnh Vinh Tuấn Đạt", "Giữa kì", "4", "100", "1"],
    ["2", "Hoàng Anh Vũ", "Giữa kì", "4", "100", "8"],
  ];

  var tableHead = document.getElementById("tableHead");
  var tableBody = document.getElementById("tableBody");
// Tạo header từ dữ liệu mẫu
var headerRow = document.createElement("tr");
headerData.forEach(function(cellData) {
    var cell = document.createElement("th");
    cell.textContent = cellData;
    headerRow.appendChild(cell);
});
tableHead.appendChild(headerRow);

// Thêm dữ liệu từ mảng vào bảng
data.forEach(function(rowData) {
    // Tạo một hàng mới
    var row = document.createElement("tr");

    // Thêm các ô/cột vào hàng mới
    rowData.forEach(function(cellData) {
        var cell = document.createElement("td");
        cell.textContent = cellData;
        row.appendChild(cell);
    });

    // Thêm hàng mới vào tbody
    tableBody.appendChild(row);
});

}
addTable();
// Lấy tham chiếu đến thead và tbody
