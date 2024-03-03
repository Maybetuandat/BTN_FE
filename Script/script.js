// Dữ liệu mẫu về kết quả của sinh viên
var studentResults = [
    { stt: 1, name: 'Nguyễn Văn A', exam: 'Toán', score: 8.5 },
    { stt: 2, name: 'Trần Thị B', exam: 'Văn', score: 7.2 },
    { stt: 3, name: 'Phạm Văn C', exam: 'Lý', score: 9.0 },
    // Thêm dữ liệu khác nếu cần
  ];
  
  // Hàm để hiển thị dữ liệu lên bảng
  function displayResults() {
    var tableBody = document.getElementById('resultsBody');
    // Xóa nội dung cũ của tbody trước khi thêm dữ liệu mới
    tableBody.innerHTML = '';
  
    // Duyệt qua mảng kết quả sinh viên và thêm dữ liệu vào bảng
    studentResults.forEach(function(result) {
      var row = document.createElement('tr');
      row.innerHTML = '<td>' + result.stt + '</td>' +
                      '<td>' + result.name + '</td>' +
                      '<td>' + result.exam + '</td>' +
                      '<td>' + result.score + '</td>';
      tableBody.appendChild(row);
    });
    
    displayStats(); // Gọi hàm hiển thị các thống kê
  }
  
  // Hàm tính toán và hiển thị các thống kê
  function displayStats() {
    var totalStudents = studentResults.length;
    var totalCompletedExams = studentResults.length; // Giả sử tất cả đều đã hoàn thành
  
    var totalScore = 0;
    var scoreDistribution = {};
  
    studentResults.forEach(function(result) {
      totalScore += result.score;
  
      // Tính phân phối điểm số
      if (scoreDistribution[result.score]) {
        scoreDistribution[result.score]++;
      } else {
        scoreDistribution[result.score] = 1;
      }
    });
  
    var averageScore = totalScore / totalStudents;
  
    // Tính tỷ lệ hoàn thành
    var completionRate = (totalCompletedExams / totalStudents) * 100;
  
    // Hiển thị tổng số lần tham gia
    document.getElementById('totalStudents').innerText = totalStudents;
  
    // Hiển thị tỷ lệ hoàn thành
    document.getElementById('completionRate').innerText = completionRate.toFixed(2) + '%';
  
    // Hiển thị điểm trung bình
    document.getElementById('averageScore').innerText = averageScore.toFixed(2);
  
    // Hiển thị biểu đồ phân phối điểm số
    displayScoreDistribution(scoreDistribution);
  }
  
  // Hàm để hiển thị biểu đồ phân phối điểm số
  function displayScoreDistribution(scoreDistribution) {
    var labels = Object.keys(scoreDistribution);
    var data = Object.values(scoreDistribution);
  
    var ctx = document.getElementById('scoreChart').getContext('2d');
    var chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Số lượng',
          data: data,
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              stepSize: 1
            }
          }]
        }
      }
    });
  }
  
  // Gọi hàm để hiển thị dữ liệu khi trang được tải
  displayResults();
  function exportToPDF() {
    const doc = new jsPDF();
    doc.autoTable({ html: '#resultsTable' });
    doc.save('report.pdf');
  }
  
  function exportToExcel() {
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.table_to_sheet(document.getElementById('resultsTable'));
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'report.xlsx');
  }
  