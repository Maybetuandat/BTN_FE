var users = [
    { username: "user1", password: "pass1" },
    { username: "user2", password: "pass2" }
];
function register() {
   
    var newUsername = document.getElementById("registerUsername").value;
    var newPassword = document.getElementById("registerPassword").value;
    if (newUsername && newPassword) {
        var exists = users.some(function(user) {
            return user.username === newUsername;
        });
        if (!exists) {
            users.push({ username: newUsername, password: newPassword });
            alert("Đăng ký thành công!");
            displayUsers();
        } else {
            alert("Tên đăng nhập đã tồn tại!");
        }
    } else {
        alert("Vui lòng điền đầy đủ thông tin!");
    }
}
function login() {
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;
    var found = users.find(function(user) {
        return user.username === username && user.password === password;
    });
    if (found) {
        alert("Tên đăng nhập hoặc mật khẩu  đúng!");
    } else {
        alert("Tên đăng nhập hoặc mật khẩu không đúng!");
    }
}
function forgotpassword()
{
    alert("We've just sent to your email! Let check it!")
}