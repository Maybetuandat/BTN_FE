
// Hàm để hiển thị popup
function showPopup() {
  if (popUp) {
    popUp.classList.remove("hidden");
  }
}

function onNotiButtonClicked(){
    
}

function onShowDetailClicked(){
  //show popUp
  showPopup();
}

function showPopup() {
  var popUp = document.getElementById("popUp");
  console.log(popUp);
  if (popUp) {
    //remove id hidden
    console.log("showPopup");
    popUp.classList.remove("hidden");
  }
}
function hidePopup() {
  var popUp = document.getElementById("popUp");
  if (popUp) {
    //add id hidden
    console.log("hidePopup");
    popUp.classList.add("hidden");
  }
}
function showPopupDetail(){
  var scrollableDiv = document.getElementById("scroll-view");
      scrollableDiv.scrollTop = 0;
  var popUp = document.getElementById("test-detail");
  console.log(popUp);
  if (popUp) {
    //remove id hidden
    console.log("showPopup");
    popUp.classList.remove("hidden2");
  }
}
function hidePopup2() {
  var popUp = document.getElementById("test-detail");
  if (popUp) {
    //add id hidden
    console.log("hidePopup");
    popUp.classList.add("hidden2");
  }
}

function Search() {

  var input, filter, table, tr, td, i, txtValue, select;
  input = document.getElementById("myInput");
  filter = translate(input.value.toUpperCase());
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");
  select = document.getElementById("search");
  let index = 0;
  if(select.value =="name"){
    index = 1;
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


function showComment()
{
  //nhieu comment
  var comment = document.getElementById("comment1");
  var comment2 = document.getElementById("comment2");
  if (comment) {
    comment.classList.remove("hidden");
    comment2.classList.remove("hidden");
  }
  var send = document.getElementById("gui-nhan-xet");
  var add = document.getElementById("them-nhan-xet");
  if(send) {
    send.classList.remove("hidden");
  }
  if(add) {
    add.classList.add("hidden");
  }
}
function hideComment() {
  var comment = document.getElementById("comment1");
  var comment2 = document.getElementById("comment2");
  if (comment) {
    comment.classList.add("hidden");
    comment2.classList.add("hidden");
  }
  var send = document.getElementById("gui-nhan-xet");
  var add = document.getElementById("them-nhan-xet");
  if(send) {
    send.classList.add("hidden");
  }
  if(add) {
    add.classList.remove("hidden");
  }
}

document.addEventListener("DOMContentLoaded", function() {
  var fadeInElement = document.querySelector('.fade-in');
  fadeInElement.classList.add('show');
});