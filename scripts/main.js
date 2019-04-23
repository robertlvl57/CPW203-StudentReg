var Student = (function () {
    function Student() {
    }
    return Student;
}());
var testStu = new Student();
testStu.firstName = "Joe";
testStu.lastName = "Ortiz";
testStu.dateOfBirth = new Date(1980, 3, 1);
window.onload = function () {
    var regBtn = document.querySelector("main > button");
    regBtn.onclick = registerStudent;
};
function registerStudent() {
    var nextStudent = getStudent();
    displayStudent(nextStudent);
}
function getStudent() {
    var s = new Student();
    var fName = document.getElementById("first-name").value;
    s.firstName = fName;
    s.lastName = document.getElementById("last-name").value;
    return s;
}
function displayStudent(stu) {
    var studentLI = document.createElement("li");
    studentLI.innerText = stu.firstName + " " + stu.lastName;
    var list = document.querySelector("#roster > ul");
    list.appendChild(studentLI);
}
