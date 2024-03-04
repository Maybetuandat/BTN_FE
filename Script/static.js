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
  var headerData = ["Stt", "Tên", "Kỳ Thi", "Môn", "Mã Môn", "Điểm"];
  var data = [
    ["1", "Nguyễn Anh Quân", "Giữa kì", "Đại số", "INT1001", "9"],
    ["2", "Nguyễn Hoàng Hiệp", "Giữa kì", "Đại số", "INT1015", "2"],
    ["2", "Trịnh Vinh Tuấn Đạt", "Giữa kì", "Đại số", "INT1015", "1"],
    ["2", "Hoàng Anh Vũ", "Giữa kì", "Giải tích", "INT1015", "4"],
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
function buildchart()
{
  var data = {
    labels: ['0-20', '21-40', '41-60', '61-80', '81-100'],
    datasets: [{
        label: 'Phân phối điểm số',
        data: [15, 25, 30, 20, 10], // Số lượng sinh viên trong từng khoảng điểm
        backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
    }]
};

// Tùy chọn biểu đồ
var options = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
};

// Lấy canvas và vẽ biểu đồ
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
});
}
buildchart();
function exportToPDF()
{
  const content = document.getElementById('content');
  html2pdf().from(content).save("Statics");
}
function exportToExcel()
{
  const wb = XLSX.utils.table_to_book(document.getElementById('table'), {sheet: "Sheet1"});
  XLSX.writeFile(wb, "table.xlsx");
}