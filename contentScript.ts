var fullPassword = document.querySelector("#_password") as HTMLParagraphElement; 
var copy_pas = document.querySelector("#copy_pas") as HTMLButtonElement; 
var repeatPas = document.querySelector("#_repeat_pas") as HTMLImageElement; 
var lengthPas = document.querySelector("#_length_pas") as HTMLSpanElement; 
var rangeInput = document.querySelector("#_rangeInput") as HTMLInputElement; 
var checkboxUpper = document.querySelector("#checkbox1") as HTMLInputElement; 
var checkboxLower = document.querySelector("#checkbox2") as HTMLInputElement; 
var checkboxNum = document.querySelector("#checkbox3") as HTMLInputElement; 
var checkboxSymb = document.querySelector("#checkbox4") as HTMLInputElement; 

rangeInput.addEventListener("input", () => {
    lengthPas.textContent = "R" + rangeInput.value; 
});

repeatPas.addEventListener("click", () => {
    generatePassword(Number(rangeInput.value));
});

copy_pas.addEventListener("click", () => {
    const generatedPassword = fullPassword.textContent;
    const tempElement = document.createElement("textarea");
    tempElement.value = generatedPassword;
    document.body.appendChild(tempElement);
    tempElement.select();
    document.execCommand("copy");
    document.body.removeChild(tempElement);
});

function generatePassword (len: number) {
    let numbers = '0123456789';
    let symbols = "!?.:;-'/@#$%&*+=<>";
    let smallLetters = 'abcdefghijklmnopqrstuvwxyz';
    let bigLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let charset = 'error'; 
    let pas = '';     
    
    if (checkboxUpper.checked) {
        charset += bigLetters;
    }

    if (checkboxLower.checked) {
        charset += smallLetters; 
    }

    if (checkboxNum.checked) {
        charset += numbers;
    }

    if (checkboxSymb.checked) {
        charset += symbols;
    }

    for (let i = 0; i < len; i += 1) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        pas += charset[randomIndex];
    }

    fullPassword.textContent = pas; 
}

generatePassword(Number(rangeInput.value));