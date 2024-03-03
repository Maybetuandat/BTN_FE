const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById('progressText');
// const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');
let currentQuestion = {};
let acceptingAnswers = false;
// let score = 0;
let questionCounter = 0;
let availableQuesions = [];
let myArray = new Array(100).fill(0);
let ansUser = [];
let questions = [];

let jsonQuestions = '../cauhoi/' + localStorage.getItem('currentSubject') + '.json';

fetch(jsonQuestions)
    .then((res) => {
        return res.json();
    })
    .then((loadedQuestions) => {
        questions = loadedQuestions;
        startGame();
    })
    .catch((err) => {
        console.error(err);
    });

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
    questionCounter = 0;
    // score = 0;
    availableQuesions = [...questions];
    // console.log(availableQuesions);
    ansUser = myArray;
    // getNewQuestion();
    hiencauhoi();
};

hiencauhoi = () => {
    let subject = document.getElementById('subject');
    subject.textContent = localStorage.getItem('nameExam');

    let cauhoi = document.getElementById('cauhoi');
    // console.log(cauhoi);
    // console.log("so cau hoi:", availableQuesions.length);
    for(let i=0; i<availableQuesions.length; i++) {
        let container_hoitrl = document.createElement('div');
        container_hoitrl.classList.add('container-hoitrl');
        container_hoitrl.id = i;

        let stt = document.createElement('div');
        stt.classList.add('stt');
        stt.textContent = 'Câu ' + (i+1);
        container_hoitrl.appendChild(stt);

        let container_cauhoi = document.createElement('div');
        container_cauhoi.textContent = availableQuesions[i].question;
        container_cauhoi.classList.add('container-cauhoi');
        container_hoitrl.appendChild(container_cauhoi);

        for(let j=1; j<=4; j++) {
            let container_choice = document.createElement('div');
            container_choice.classList.add('choice');
            container_choice.textContent = availableQuesions[i]['choice' + j];
            container_hoitrl.appendChild(container_choice);
        }
        cauhoi.appendChild(container_hoitrl);
    }
    let trangthai = document.getElementById('trangthai');

    let blockDiv = document.createElement('div');
    blockDiv.id = 'blockDiv';
    for(let i=0; i<availableQuesions.length; i++) {
        let block = document.createElement('span');
        block.classList.add('block');
        block.id = 'block' + (i+1);
        block.textContent = i + 1;
        blockDiv.appendChild(block);
    }
    trangthai.appendChild(blockDiv);

    let choice = Array.from(document.getElementsByClassName('choice'));
    // console.log('choice: ', choice);
    for(let i=0; i<choice.length; i++) {
        let x = choice[i];
        x.addEventListener('click', (e) => {
            let selectedChoice = e.target;
            let cauhoiId = parseInt(selectedChoice.parentElement.id);
            let block = document.getElementById('block'+(cauhoiId+1));
            if(selectedChoice.classList.contains('pick')) {
                selectedChoice.classList.remove('pick');
                block.style.background = 'white';
                ansUser[parseInt(cauhoiId) + 1] = 0;
                return;
            }
            block.style.background = '#578fde';
            let selectedAnswer = i - cauhoiId * 4 + 1;
            ansUser[parseInt(cauhoiId) + 1] = selectedAnswer;

            selectedChoice.classList.add('pick');
            choice.forEach((x) => {
                if(x != selectedChoice && x.classList.contains('pick') && x.parentElement.id == selectedChoice.parentElement.id)
                    x.classList.remove('pick');
            });

        });
    }
    let arrBlocks = Array.from(document.getElementsByClassName('block'));
    arrBlocks.forEach((block) => {
        block.addEventListener('click', () => {
            let target = document.getElementById(parseInt(block.textContent) - 1);
            target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        })
    })

}

nopbai = () => {
    let confirmed = confirm('Thời gian làm bài thi chưa hết, bạn có chắc chắn muốn nộp bài?');
    if(!confirmed) return;
    // console.log(ansUser);
    localStorage.setItem('answerofUser', JSON.stringify(ansUser));
    return window.location.assign('../html/end.html');
}
thoat = () => {
    let confirmed = confirm('Tiến trình sẽ không được lưu lại, bạn có muốn thoát khỏi bài thi?');
    if(!confirmed) return;
    return window.location.assign('../html/luyentap.html');
}

if(localStorage.getItem('setTime') == 1) {

    var distance = 1000 * 10;
    // Cập nhật thời gian mỗi 1 giây
    var timer = setInterval(function() {
    
        // Tính toán thời gian còn lại
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        distance -= 1000;
        document.getElementById('countdown').innerHTML = minutes + ':' + seconds ;
        
        if (distance < -1000) {
            clearInterval(timer);
            document.getElementById('countdown').innerHTML = 'Hết thời gian!';
            alert('Hết thời gian làm bài thi!');
            localStorage.setItem('answerofUser', JSON.stringify(ansUser));
            return window.location.assign('../html/end.html');
        }
    }, 1000);
}

document.addEventListener('scroll', function() {
    var rightDiv = document.getElementById('action');
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    var leftDiv = document.getElementById('cauhoi');
    var leftDivBottom = leftDiv.getBoundingClientRect().bottom;
    var rightDivBottom = rightDiv.getBoundingClientRect().bottom;
    
    // console.log(leftDivBottom + ' ' + rightDivBottom);
    
    if (leftDivBottom > rightDivBottom) {
        rightDiv.style.top = (scrollTop) + 'px';
    }
});


