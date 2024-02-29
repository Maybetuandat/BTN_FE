
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