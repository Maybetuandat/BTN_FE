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
  var headerData = ["Stt", "Tên", "Kỳ Thi", "Môn Học", "Mã Môn", "Điểm"];
  var data = [
    ["1", "Nguyễn Anh Quân", "Giữa kì", "Giải tích", "INT1015", "4"],
    ["2", "Nguyễn Anh Quân", "Giữa kì", "Giải tích", "INT1015", "4"],
    ["3", "Nguyễn Anh Quân", "Giữa kì", "Giải tích", "INT1015", "4"],
    ["4", "Nguyễn Anh Quân", "Giữa kì", "Giải tích", "INT1015", "4"],
    ["5", "Nguyễn Anh Quân", "Giữa kì", "Giải tích", "INT1015", "4"],
    ["6", "Nguyễn Anh Quân", "Giữa kì", "Giải tích", "INT1015", "4"],
    ["7", "Nguyễn Anh Quân", "Giữa kì", "Giải tích", "INT1015", "4"],
    ["8", "Nguyễn Anh Quân", "Giữa kì", "Giải tích", "INT1015", "4"],
    ["9", "Nguyễn Anh Quân", "Giữa kì", "Giải tích", "INT1015", "4"],
    ["10", "Nguyễn Anh Quân", "Giữa kì", "Giải tích", "INT1015", "4"],
    ["12", "Nguyễn Anh Quân", "Cuối kì", "Giải tích", "INT1015", "4"],
    ["13", "Nguyễn Anh Quân", "Cuối kì", "Giải tích", "INT1015", "4"],
    ["14", "Nguyễn Anh Quân", "Cuối kì", "Giải tích", "INT1015", "4"],
    ["15", "Nguyễn Anh Quân", "Cuối kì", "Giải tích", "INT1015", "4"],
    ["16", "Nguyễn Anh Quân", "Cuối kì", "Giải tích", "INT1015", "4"],
    ["17", "Nguyễn Anh Quân", "Cuối kì", "Giải tích", "INT1015", "4"],
    ["18", "Nguyễn Anh Quân", "Cuối kì", "Giải tích", "INT1015", "4"],
    ["19", "Nguyễn Anh Quân", "Cuối kì", "Giải tích", "INT1015", "4"],
    ["20", "Nguyễn Hoàng Hiệp", "Cuối kì", "Giải tích", "INT1015", "3"],
    ["21", "Nguyễn Hoàng Hiệp", "Cuối kì", "Giải tích", "INT1015", "3"],
    ["22", "Nguyễn Hoàng Hiệp", "Cuối kì", "Giải tích", "INT1015", "3"],
    ["23", "Nguyễn Hoàng Hiệp", "Cuối kì", "Giải tích", "INT1015", "3"],
    ["24", "Nguyễn Hoàng Hiệp", "Cuối kì", "Giải tích", "INT1015", "3"],
    ["25", "Nguyễn Hoàng Hiệp", "Cuối kì", "Đại số", "INT1015", "3"],
    ["26", "Nguyễn Hoàng Hiệp", "Cuối kì", "Đại số", "INT1015", "3"],
    ["27", "Nguyễn Hoàng Hiệp", "Cuối kì", "Đại số", "INT1015", "3"],
    ["28", "Nguyễn Hoàng Hiệp", "Cuối kì", "Đại số", "INT1015", "3"],
    ["29", "Nguyễn Hoàng Hiệp", "Cuối kì", "Đại số", "INT1015", "3"],
    ["30", "Nguyễn Hoàng Hiệp", "Cuối kì", "Đại số", "INT1015", "3"],
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
