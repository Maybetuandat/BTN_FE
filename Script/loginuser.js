var users = [
    { username: "user1", password: "pass1" },
    { username: "user2", password: "pass2" }
];
function register() {
   
    var newUsername = document.getElementById("registerUsername").value;
    var newPassword = document.getElementById("registerPassword").value;
    if (newUsername && newPassword) 
    {
        // kiểm tra xem mật khẩu có đạt yêu cầu không, tài khoản không được có kí tự đậc biệt
        if(!isvaliduser(newUsername))
        {
            window.location.href = "../html/register.html";
            return;
        }
        if(!isValidPassword(newPassword))
        {
            alert("Mật khẩu không hợp lệ ! Mật khẩu phải đầy đủ kí tự thường, in hoa, kí tự đặc biệt");
            window.location.href = "../html/register.html";
            return;
        }


        var exists = users.some(function(user) {
            return user.username === newUsername;
        });
        if (!exists) {
            users.push({ username: newUsername, password: newPassword });
            window.location.href = "../index.html";  
        } else 
        {
            window.location.href = "../index.html";
            
        }
    } else {
        alert("Vui lòng điền đầy đủ thông tin!");
    }
}
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
        window.location.href = "./html/luyentap.html"; // điều hướng ra trang admin
    } else {
        var notice = document.getElementById("notice");
        notice.classList.remove("hidden")
        document.getElementById("loginUsername").value = "";  // xóa kí tự tài khoản vừa nhập
        document.getElementById("loginPassword").value = ""; 
    }
}
function forgotpassword()
{
    document.getElementById("email").value = "";  
    alert("We've just sent to your email! Let check it!")
    window.location.href = "../index.html";   // điều hướng qua trang khác
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


