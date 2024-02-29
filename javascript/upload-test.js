
document.getElementById('examType').addEventListener('change', function () {
    var examType = this.value;
    var specificTime = document.getElementById('specificTime');

    if (examType === 'time-count') {
        specificTime.style.display = 'block';
    } else {
        specificTime.style.display = 'none';
    }
});

document.getElementById('fileOption').addEventListener('change', function () {
    var fileOption = this.value;
    var fileUpload = document.getElementById('fileUpload');

    if (fileOption === 'upload') {
        fileUpload.style.display = 'block';
    } else {
        fileUpload.style.display = 'none';
    }
});

document.getElementById('examForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Lấy thông tin từ form


    var numQuestions = parseInt(document.getElementById('numQuestions').value);
    var questionsContainer = document.getElementById('questionsContainer');

    // Xóa các câu hỏi cũ trước khi tạo mới
    questionsContainer.innerHTML = '';

    // Tạo các ô input cho câu hỏi và đáp án
    for (var i = 1; i <= numQuestions; i++) {
        var questionDiv = document.createElement('div');
        questionDiv.className = 'question-container';

        var questionLabel = document.createElement('label');
        questionLabel.textContent = 'Câu hỏi ' + i + ':';
        var questionInput = document.createElement('input');
        questionInput.type = 'text';
        questionInput.name = 'question' + i;

        questionDiv.appendChild(questionLabel);
        questionDiv.appendChild(questionInput);

        // Tạo 4 ô input cho 4 đáp án và checkbox cho đáp án đúng
        for (var j = 1; j <= 4; j++) {
            var answerLabel = document.createElement('label');
            var answerCheckbox = document.createElement('input');
            answerCheckbox.type = 'checkbox';
            answerCheckbox.name = 'question' + i + 'correctAnswer';
            answerLabel.appendChild(answerCheckbox);

            var answerInput = document.createElement('input');
            answerInput.type = 'text';
            answerInput.name = 'question' + i + 'answer' + j;

            answerLabel.appendChild(document.createTextNode(' Đáp án ' + j + ':'));
            questionDiv.appendChild(answerLabel);
            questionDiv.appendChild(answerInput);
        }

        questionsContainer.appendChild(questionDiv);
    }


});



document.getElementById('excelFile').addEventListener('change', function (event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    var questionsContainer = document.getElementById('questionsContainer');

    // Xóa các câu hỏi cũ trước khi tạo mới
    questionsContainer.innerHTML = '';

    reader.onload = function (e) {
        var data = new Uint8Array(e.target.result);
        var workbook = XLSX.read(data, { type: 'array' });
        var firstSheet = workbook.Sheets[workbook.SheetNames[0]];
        var excelData = XLSX.utils.sheet_to_json(firstSheet);
        console.log(excelData);
        // Xử lý dữ liệu từ tệp Excel và tạo các trường input câu hỏi và đáp án
        excelData.forEach(function (row, index) {
            var questionDiv = document.createElement('div');
            questionDiv.className = 'question-container';

            var questionLabel = document.createElement('label');
            questionLabel.textContent = 'Câu hỏi ' + (index + 1) + ':';
            var questionInput = document.createElement('input');
            questionInput.type = 'text';
            questionInput.name = 'question' + (index + 1);
            questionInput.value = row.question;

            questionDiv.appendChild(questionLabel);
            questionDiv.appendChild(questionInput);

            // Tạo các ô input cho 4 đáp án và checkbox cho đáp án đúng
            for (var j = 1; j <= 4; j++) {
                var answerLabel = document.createElement('label');
                var answerCheckbox = document.createElement('input');
                answerCheckbox.type = 'checkbox';
                answerCheckbox.name = 'question' + (index + 1) + 'correctAnswer';
                answerLabel.appendChild(answerCheckbox);

                var answerInput = document.createElement('input');
                answerInput.type = 'text';
                answerInput.name = 'question' + (index + 1) + 'answer' + j;
                answerInput.value = row['answer' + j];

                answerLabel.appendChild(document.createTextNode(' Đáp án ' + j + ':'));
                questionDiv.appendChild(answerLabel);
                questionDiv.appendChild(answerInput);
            }

            questionsContainer.appendChild(questionDiv);
        });
    };

    reader.readAsArrayBuffer(file); //đọc xong mới xử lý onload()
});