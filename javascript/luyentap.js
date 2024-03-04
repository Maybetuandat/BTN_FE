let somonthi = [0,5,5,5,1,1,5,3];
for(let i=1; i<=7; i++) {
        let kythi = 'kythi' + i;
        let container_kythi = document.getElementById(kythi);
        for(let j=1; j<=somonthi[i]; j++) {
            if(j <= 3){
                let container_monthi = document.createElement('div');
                container_monthi.classList.add('container-monthi');
                container_monthi.classList.add(kythi);
                
                let newDiv = document.createElement('div');
                let mon = 'kythi' + i + '_' + 'mon' + j;

                newDiv.textContent = "Môn " + j;
                newDiv.classList.add('mon1');
                let nameExam = document.getElementById('thi'+i).textContent + ' - ' + newDiv.textContent;

                let newButton = document.createElement('button');
                newButton.textContent = 'Vào thi';
                newButton.classList.add('btn-vaothi');
                newButton.onclick = () => {
                        localStorage.setItem('currentSubject', mon);
                        localStorage.setItem('nameExam', nameExam);
                        openDialog("Thông báo", "Bạn có muốn bắt đầu bài thi?", function() {
                            closeDialog();
                            console.log('mon: ', mon);
                            window.location.assign('../html/game.html');
                        });
                }

                container_monthi.appendChild(newDiv);
                container_monthi.appendChild(newButton);
                container_kythi.appendChild(container_monthi);
            }
            else{
                let container_monthi = document.createElement('div');
                container_monthi.classList.add('container-monchuathi');
                container_monthi.classList.add(kythi);
                
                let newDiv = document.createElement('div');
                let mon = 'kythi' + i + '_' + 'mon' + j;

                newDiv.textContent = "Môn " + j;
                newDiv.classList.add('mon1');
                let nameExam = document.getElementById('thi'+i).textContent + ' - ' + newDiv.textContent;

                let newButton = document.createElement('button');
                newButton.textContent = 'Chưa bắt đầu';
                newButton.classList.add('btn-chua-bat-dau');
                newButton.onclick = () => {
                    openDialog("Thông báo", "Bài thi chưa bắt đầu", function() {
                        console.log('mon: ', mon);
                        closeDialog();
                    });
                }

                container_monthi.appendChild(newDiv);
                container_monthi.appendChild(newButton);
                container_kythi.appendChild(container_monthi);
            }
        }    
}

let somonluyentap = [0,4,2,3,1,1,5,3];
let tenmon = [[], ['Đại số', 'Giải tích 1', 'Tin học cơ sở 1', 'Triết học Mác-Lenin'],[],[],[],[],[],[]];
for(let i=1; i<=7; i++) {
        let luyentap = 'luyentap' + i;
        let container_luyentap = document.getElementById(luyentap);
        for(let j=1; j<=somonluyentap[i]; j++) {
            if(j <= 3)
            {
                let container_monluyentap = document.createElement('div');
                container_monluyentap.classList.add('container-monthi');
                container_monluyentap.classList.add(luyentap);
        
                let newDiv = document.createElement('div');
                let mon = 'luyentap' + i + '_' + 'mon' + j;
                // let monVn = 'Luyện tập ' + i + document.getElementById('mon'+j).textContent;
                newDiv.textContent = tenmon[i][j-1];
                newDiv.classList.add('mon1');
                let nameExam = document.getElementById('lt'+i).textContent + ' - ' + newDiv.textContent;
        
                let newButton = document.createElement('button');
                newButton.textContent = 'Vào thi';
                newButton.classList.add('btn-vaothi');
                newButton.onclick = () => {
                        localStorage.setItem('currentSubject', mon);
                        localStorage.setItem('nameExam', nameExam);
                        // openDialog("Thông báo", "Bạn có muốn bắt đầu bài thi?", function() {
                        //     closeDialog();
                        //     console.log('mon: ', mon);
                            window.location.assign('../html/game.html');
                        // });
                }
                
                container_monluyentap.appendChild(newDiv);
                container_monluyentap.appendChild(newButton);
                container_luyentap.appendChild(container_monluyentap);
            }
            else{
                let container_monluyentap = document.createElement('div');
                container_monluyentap.classList.add('container-monchuathi');
                container_monluyentap.classList.add(luyentap);
        
                let newDiv = document.createElement('div');
                let mon = 'luyentap' + i + '_' + 'mon' + j;
                // let monVn = 'Luyện tập ' + i + document.getElementById('mon'+j).textContent;
                newDiv.textContent = tenmon[i][j-1];
                newDiv.classList.add('mon1');
                let nameExam = document.getElementById('lt'+i).textContent + ' - ' + newDiv.textContent;
        
                let newButton = document.createElement('button');
                newButton.textContent = 'Chưa bắt đầu';
                newButton.classList.add('btn-chua-bat-dau');
                newButton.onclick = () => {
                    localStorage.setItem('currentSubject', mon);
                        localStorage.setItem('nameExam', nameExam);
                        openDialog("Thông báo", "Bài thi chưa bắt đầu?", function() {
                            closeDialog();
                            console.log('mon: ', mon);
                        });
                }
                
                container_monluyentap.appendChild(newDiv);
                container_monluyentap.appendChild(newButton);
                container_luyentap.appendChild(container_monluyentap);
            
            }
        }
        
}


hideShow = (x) => {
        let container_monthi = document.getElementsByClassName(x);
        for (var i = 0; i < container_monthi.length; i++) {
            if (container_monthi[i].style.display === 'none') {
                    container_monthi[i].style.display = 'flex';
                    // for(var j = 1; j <= 7; j++)
                    // {
                    //     if(j != parseInt(x[x.length - 1]))
                    //     {
                    //         let container_monthi = document.getElementsByClassName('kythi' + j);
                    //         for (let k = 0; k < container_monthi.length; k++) {
                    //             container_monthi[k].style.display = 'none';
                    //         }
                    //         let container_luyentap = document.getElementsByClassName('luyentap' + j);
                    //         for (let k = 0; k < container_luyentap.length; k++) {
                    //             container_luyentap[k].style.display = 'none';
                    //         }
                    //     }
                    // }
            } else {
                    container_monthi[i].style.display = 'none';
            }
        }
}


showLuyentap = () => {
        let luyentap = document.getElementById('container-luyentap');
        let thi = document.getElementById('container-thi');
        luyentap.style.display = 'block';
        thi.style.display = 'none';
        localStorage.setItem('setTime', 0);

        document.getElementById('btn-lt').style.background = '#ad171c';
        document.getElementById('btn-lt').style.color = 'white';
        document.getElementById('btn-thi').style.background = 'white';
        document.getElementById('btn-thi').style.color = 'black';
}

showThi = () => {
        let luyentap = document.getElementById('container-luyentap');
        let thi = document.getElementById('container-thi');
        luyentap.style.display = 'none';
        thi.style.display = 'block';
        localStorage.setItem('setTime', 1);

        document.getElementById('btn-thi').style.background = '#ad171c';
        document.getElementById('btn-lt').style.background = 'white';
        document.getElementById('btn-lt').style.color = 'black';
        document.getElementById('btn-thi').style.color = 'white';
}

let trangthai = localStorage.getItem('setTime');
if(trangthai == 0 || trangthai == null) showLuyentap();
else if(trangthai == 1) showThi();

for(let i=1; i<10; i++) {
        let kythi = 'kythi' + i;
        let container_monthi = document.getElementsByClassName(kythi);
        // container_monthi.style.display = 'none';
        for (let j = 0; j < container_monthi.length; j++) {
                container_monthi[j].style.display = 'none';
        }

        let luyentap = 'luyentap' + i;
        let container_luyentap = document.getElementsByClassName(luyentap);
        // container_monthi.style.display = 'none';
        for (let j = 0; j < container_luyentap.length; j++) {
                container_luyentap[j].style.display = 'none';
        }
}

function removeVietnameseAccent(str) {
        str = str.toLowerCase();
        // Dùng bảng mã Unicode để thay thế các ký tự có dấu thành không dấu
        str = str.replace(/[áàảãạăắằẳẵặâấầẩẫậ]/g, 'a');
        str = str.replace(/[éèẻẽẹêếềểễệ]/g, 'e');
        str = str.replace(/[íìỉĩị]/g, 'i');
        str = str.replace(/[óòỏõọôốồổỗộơớờởỡợ]/g, 'o');
        str = str.replace(/[úùủũụưứừửữự]/g, 'u');
        str = str.replace(/[ýỳỷỹỵ]/g, 'y');
        str = str.replace(/đ/g, 'd');
        // Loại bỏ các ký tự không phải là chữ cái hoặc số
        str = str.replace(/[^a-z0-9\s]/g, '');
        // Loại bỏ khoảng trắng thừa
        str = str.replace(/\s+/g, ' ');
        // Loại bỏ khoảng trắng ở đầu và cuối chuỗi
        str = str.trim();
        return str;
    }
    

myFilter = () => {
        var input, filter, nameExam, id, td, i, txtValue;
        input = document.getElementById("myInput");
        filter = removeVietnameseAccent(input.value);
        let setTime = localStorage.getItem('setTime');
        if(setTime == 0) {
             nameExam = Array.from(document.getElementsByClassName('luyentap'));
             id = 'lt';
        }
        else {
             nameExam = Array.from(document.getElementsByClassName('kythi'));
             id = 'thi';    
        }
        for (i = 0; i < nameExam.length; i++) {
                let tmpid = id + (i+1);
                td = document.getElementById(tmpid);
                console.log(td);
                if (td) {
                  txtValue = td.textContent || td.innerText;
                  console.log('txt: ', txtValue);
                  if (removeVietnameseAccent(txtValue).indexOf(filter) > -1) {
                        nameExam[i].style.display = "flex";
                  } else {
                        nameExam[i].style.display = "none";
                  }
                }
              }
        
      }




function showNotification() {
    alert('Chưa bắt đầu');
        let notification = document.getElementById('notification');
        notification.style.display = 'flex';
}

function showInfor(){
        let infor = document.getElementById('infor');
        infor.style.display = 'flex';
}
function openDialog(tittle, content, func) {
    var content1 = document.getElementById('content-dialog');
    var question = document.getElementById('question-dialog');
    var btnContinue = document.getElementById('btn-continue');
    question.innerHTML = `<p class="sent" id="question-dialog">${content}</p>`;
    content1.textContent = tittle;
    btnContinue.onclick = func;
    dialogOverlay.style.display = 'block';
    dialogContent.style.display = 'block';
    console.log('click');
}

// Hàm đóng dialog
function closeDialog() {
    dialogOverlay.style.display = 'none';
    dialogContent.style.display = 'none';
}
