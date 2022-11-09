window.onload = function() {
    let formBtn = 
        <HTMLElement>document.querySelector("form > button");
    formBtn.onclick = main;
}

function main():void{
    validateTextInput("first-name", "First name is required");
    validateTextInput("last-name", "Last name is required");

    
}

function validateTextInput(id:string, errMsg:string):boolean {
    let textBox = <HTMLInputElement>document.getElementById(id);
    let textBoxValue = textBox.value;
    if (textBoxValue == "") {
        let errSpan = 
            <HTMLElement>textBox.nextElementSibling;
        errSpan.innerText = errMsg;
        return false;
    }
    return true;
}
