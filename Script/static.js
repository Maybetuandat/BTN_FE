// Lấy tham chiếu đến thead và tbody
function buildchart()
{
  var data = {
    labels: ['0-2', '2-4', '4-6', '6-8', '8-10'],
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
  const content = document.getElementById('header');
  html2pdf().from(content).save("Statics");
}
function exportToExcel()
{
  const wb = XLSX.utils.table_to_book(document.getElementById('table'), {sheet: "Sheet1"});
  XLSX.writeFile(wb, "table.xlsx");
}

function showAll()
{
  var input = document.getElementById("myInput1");
  input.value = "";
  Search();
}

function Search() {

  var input, filter, table, tr, td, i, txtValue, select;
  input = document.getElementById("myInput1");
  filter = translate(input.value.toUpperCase());
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");
  select = document.getElementById("search");
  let index = 1;
  if(select.value =="kythi"){
    index = 2;
  }
  else if(select.value =="mon"){
    index = 3;
  }
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[index];
    if (td) {
      txtValue = translate(td.textContent || td.innerText);
      let txt = txtValue.toLowerCase().split(" ").join("");
      console.log(txt);
      if (txt.indexOf(filter) !== -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
      
    }
  }
}

function translate(s)
{
  //translate tu tieng viet sang kh dau
  var str = s;
  str = str.toLowerCase();
  str = str.replace(/á|à|ả|ã|ạ|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/g, "a");
  str = str.replace(/đ/g, "d");
  str = str.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/g, "e");
  str = str.replace(/í|ì|ỉ|ĩ|ị/g, "i");
  str = str.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/g, "o");
  str = str.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/g, "u");
  str = str.replace(/ý|ỳ|ỷ|ỹ|ỵ/g, "y");
  return str;
}

