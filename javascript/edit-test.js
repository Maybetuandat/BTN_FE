var currentNumber = 4;

function Add() {

    var questionsContainer = document.getElementById('questionsContainer');

    var questionContent = document.createElement('div');
    questionContent.className = 'question-content';

    var questionDiv = document.createElement('div');
    questionDiv.className = 'question-container';

    var questionLabel = document.createElement('label');
    questionLabel.textContent = 'Câu hỏi ' + currentNumber + ':';

    var questionInput = document.createElement('textarea');
    questionInput.cols = 70;
    questionInput.rows = 4;


    questionDiv.appendChild(questionLabel);
    questionDiv.appendChild(questionInput);
    questionContent.appendChild(questionDiv);
    // Tạo 4 ô input cho 4 đáp án và checkbox cho đáp án đúng


    for (var j = 1; j <= 4; j++) {
        var answerDiv = document.createElement('div');
        answerDiv.className = 'answer-container';

        var answerCheckbox = document.createElement('div');
        answerCheckbox.className = 'checkbox';
        answerCheckbox.id = currentNumber + 'checkbox' + j;
        answerCheckbox.onclick = function () {
            toggleCheckbox(this.id);
        };
        answerCheckbox.textContent = String.fromCharCode('A'.charCodeAt(0) + j - 1);

        var answerInput = document.createElement('textarea');
        answerInput.cols = "70";
        answerInput.rows = "1";
        answerInput.name = 'question' + currentNumber + 'answer' + j;

        answerDiv.appendChild(answerCheckbox);
        answerDiv.appendChild(answerInput);

        questionContent.appendChild(answerDiv);

    }

    questionsContainer.appendChild(questionContent);
    currentNumber++;

}

function toggleCheckbox(idElement) {
    var element = document.getElementById(idElement);
    console.log(element);
    if (element.style.backgroundColor === 'green') {
        element.style.backgroundColor = 'transparent';
    } else {
        element.style.backgroundColor = 'green';
    }
}

function Delete() {
    var confirmA = confirm("Bạn có chắc chắn muốn xóa bài thi này ?");
    if (confirmA) {
        window.location.href = "https://www.facebook.com/";
    }

}

function Save() {
    alert("Lưu thành công");

}

function DeleteQuestion(id) {
    var element = document.getElementById(id);
    UpDateIdForQuestion(id);
    element.remove();
}

function UpDateIdForQuestion(id) {
    for (var i = parseInt(id) + 1; i < currentNumber; i++) {
        var element = document.getElementById(i);
        console.log(element);
        if (element) {
            var oldId = i.toString();
            element.id = i - 1;
            var questionLabels = element.querySelectorAll('label');
            questionLabels[0].textContent = 'Câu hỏi ' + element.id + ':';
            for (var j = 1; j <= 4; j++) {
                var oldCheckBoxId = oldId + 'checkbox' + j;
                var checkbox = document.getElementById(oldCheckBoxId);
                if (checkbox) {
                    checkbox.id = element.id + 'checkbox' + j;
                }
            }
        }
    }
    currentNumber--;
}
