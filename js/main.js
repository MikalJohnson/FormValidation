window.onload = function () {
    var formBtn = document.querySelector("form > button");
    formBtn.onclick = main;
};
function main() {
    validateTextInput("first-name", "First name is required");
    validateTextInput("last-name", "Last name is required");
}
function validateTextInput(id, errMsg) {
    var textBox = document.getElementById(id);
    var textBoxValue = textBox.value;
    if (textBoxValue == "") {
        var errSpan = textBox.nextElementSibling;
        errSpan.innerText = errMsg;
        return false;
    }
    return true;
}
