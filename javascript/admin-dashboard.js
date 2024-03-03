
// Mảng chứa các môn học
var subjects = [
    { id: "1", name: "Bài thi 01", startTime: "8:00", duration: "120 phút", status: "Chưa bắt đầu" },
    { id: "2", name: "Bài thi 02", startTime: "10:30", duration: "90 phút", status: "Chưa bắt đầu" },
    { id: "3", name: "Bài thi 03", startTime: "13:00", duration: "60 phút", status: "Đang diễn ra" },
    { id: "4", name: "Bài thi 04", startTime: "13:00", duration: "60 phút", status: "Đang diễn ra" },
    { id: "5", name: "Bài thi 05", startTime: "13:00", duration: "60 phút", status: "Chưa bắt đầu" },
    { id: "6", name: "Bài thi 06", startTime: "13:00", duration: "60 phút", status: "Chưa bắt đầu" },
    { id: "7", name: "Bài thi 07", startTime: "13:00", duration: "60 phút", status: "Chưa bắt đầu" },
    { id: "8", name: "Bài thi 08", startTime: "13:00", duration: "60 phút", status: "Chưa bắt đầu" }
];

var students = [
    { code: "B21DCCN795", name: "Hoàng Anh Vũ", class: "D21CQCN03-B", testList: ["1", "2"] },
    { code: "B21DCCN000", name: "Vũ Hoàng Anh", class: "D21CQCN03-B", testList: ["1"] },
    { code: "B21DCCN795", name: "Hoàng Anh Vũ", class: "D21CQCN03-B", testList: ["1", "2"] },
    { code: "B21DCCN795", name: "Hoàng Anh Vũ", class: "D21CQCN03-B", testList: ["1", "2"] },
    { code: "B21DCCN795", name: "Hoàng Anh Vũ", class: "D21CQCN03-B", testList: ["1", "2"] },
    { code: "B21DCCN795", name: "Hoàng Anh Vũ", class: "D21CQCN03-B", testList: ["1", "2"] },
]

var testContainer = document.getElementById("test-container");

// Tạo bảng
var table1 = document.createElement("table");

// Tạo tiêu đề của bảng
var headerRow = table1.insertRow();
var headers = ["ID", "Tên bài thi", "Bắt đầu", "Thời lượng", "Trạng thái", "Chỉnh sửa", "Xóa"];

headers.forEach(function (headerText) {
    var headerCell = document.createElement("th");
    headerCell.textContent = headerText;
    headerRow.appendChild(headerCell);
});

// Duyệt qua mảng môn học và tạo các hàng của bảng
subjects.forEach(function (subject, index) {
    var row = table1.insertRow();

    var idCell = row.insertCell();
    idCell.textContent = subject.id;

    var nameCell = row.insertCell();
    nameCell.textContent = subject.name;

    var startTimeCell = row.insertCell();
    startTimeCell.textContent = subject.startTime;

    var durationCell = row.insertCell();
    durationCell.textContent = subject.duration;

    var statusCell = row.insertCell();
    if (subject.status === "Chưa bắt đầu") {
        statusCell.classList.add("yellow-text");
    }
    if (subject.status === "Đang diễn ra") {
        statusCell.classList.add("green-text");
    }
    statusCell.textContent = subject.status;

    var editCell = row.insertCell();
    var editButton = document.createElement("button");
    var editLink = document.createElement("a");
    editLink.href = "./edit-test.html";

    var editIcon = document.createElement("i");
    editIcon.classList.add("ti-pencil");
    editButton.appendChild(editIcon);
    editLink.appendChild(editButton);
    editCell.appendChild(editLink);

    // Thêm nút xóa vào hàng
    var deleteCell = row.insertCell();
    var deleteButton = document.createElement("button");
    var deleteIcon = document.createElement("i");
    deleteButton.classList.add("ti-trash");
    deleteButton.appendChild(deleteIcon);

    deleteButton.onclick = function () {
        var confirmation = confirm("Bạn có chắc chắn muốn xóa môn học " + subject.name + "?");
        if (confirmation) {
            // Xóa môn học khỏi mảng subjects
            subjects.splice(index, 1);
            // Xóa hàng từ bảng
            table1.deleteRow(row.rowIndex);

        }
    };
    deleteCell.appendChild(deleteButton);
});

// Thêm bảng vào container
testContainer.appendChild(table1);


var studentContainer = document.getElementById("student-container");
// Tạo bảng
var table2 = document.createElement("table");

// Tạo tiêu đề của bảng
var headerRow = table2.insertRow();
var headers = ["STT", "Mã sinh viên", "Họ và tên", "Lớp", "Chỉnh sửa", "Xóa"];

headers.forEach(function (headerText) {
    var headerCell = document.createElement("th");
    headerCell.textContent = headerText;
    headerRow.appendChild(headerCell);
});

// Duyệt qua mảng các sinh viên và tạo các hàng của bảng
students.forEach(function (student, index) {
    var row = table2.insertRow();

    // Thêm dữ liệu cho từng cột trong hàng
    var idCell = row.insertCell();
    idCell.textContent = index + 1;


    var codeCell = row.insertCell();
    codeCell.textContent = student.code;

    var nameCell = row.insertCell();
    nameCell.textContent = student.name;

    var classCell = row.insertCell();
    classCell.textContent = student.class;

    // Thêm nút chỉnh sửa vào hàng
    var editCell = row.insertCell();
    var editButton = document.createElement("button");
    var editIcon = document.createElement("i");
    editIcon.classList.add("ti-pencil");
    editButton.onclick = function () {
        openPopUp('edit-student');
    }
    editButton.appendChild(editIcon);
    editCell.appendChild(editButton);



    // Thêm nút xóa vào hàng
    var deleteCell = row.insertCell();
    var deleteButton = document.createElement("button");
    var deleteIcon = document.createElement("i");
    deleteButton.classList.add("ti-trash");
    deleteButton.appendChild(deleteIcon);

    deleteCell.appendChild(deleteButton);

    // Thêm sự kiện cho nút xóa
    deleteButton.onclick = function () {
        var confirmation = confirm("Bạn có chắc chắn muốn xóa sinh viên " + student.name + "?");
        if (confirmation) {
            // Xóa sinh viên khỏi mảng students
            students.splice(index, 1);
            // Xóa hàng khỏi bảng
            table2.deleteRow(row.rowIndex);

        }
    };
});

// Thêm bảng vào container
studentContainer.appendChild(table2);


// hiển thị chi tiết bài thi
async function showDetails() {
    var details = document.getElementById('myModal');
    details.style.display = 'block';

    // Khởi tạo lại đồ thị sau khi hiển thị chi tiết
    await initializeChart();
}

function openPopUp(id) {
    var details = document.getElementById(id);
    details.style.display = 'block';
}

function closePopUp(id) {
    var chartElement = document.getElementById('bar-chart');
    chartElement.innerHTML = '';
    var details = document.getElementById(id);
    details.style.display = 'none';

}

