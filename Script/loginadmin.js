var users = [
    { username: "admin", password: "123456" }
];
function login() {
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;
    if(!isvaliduser(username))
    {
        document.getElementById("loginUsername").value = "";  // xóa kí tự tài khoản vừa nhập
        document.getElementById("loginPassword").value = "";    // xóa kí tự mật khẩu vừa nhập
        alert("Tên đăng nhập không được chứa các kí tự đặc biệt");
        return;
    }
    var found = users.find(function(user) {
        return user.username === username && user.password === password;
    });
    if (found) {
        window.location.href = "../html/admin-dashboard.html"; // điều hướng ra trang admin
    } else {
        document.getElementById("loginUsername").value = "";  // xóa kí tự tài khoản vừa nhập
        document.getElementById("loginPassword").value = ""; 
    }
}
function forgotpassword()
{
    document.getElementById("email").value = "";  
    alert("We've just sent to your email! Let check it!")
    window.location.href = "../html/loginuser.html";   // điều hướng qua trang khác
}
//    kiểm tra xem mật khẩu đã đủ các kí tự in thường, in hoa , kí tự đặc biệt hay chưa
function isValidPassword(password)   // trả về true or false
{
    function hasSpecialCharacter(password) {
        return /[!@#$%^&*(),.?":{}|<>]/.test(password);
    }
    function hasLowerCase(password) {
        return /[a-z]/.test(password);
    }
    
    function hasUpperCase(password) {
        return /[A-Z]/.test(password);
    }
    
    return hasUpperCase(password) && hasLowerCase(password) && hasSpecialCharacter(password);
}
function isvaliduser(username)
{
    
    function hasSpecialCharacter(password) {
        return /[!@#$%^&*(),.?":{}|<>]/.test(password);
    }
    return !hasSpecialCharacter(username);
}


