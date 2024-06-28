const inputnum1 = document.getElementById("num1");
const inputnum2 = document.getElementById("num2");
const answer = document.getElementById("result");

function calculateSum(){
    const val1 = parseInt(inputnum1.value);
    const val2 = parseInt(inputnum2.value);
    const sum = val1 + val2;
    answer.innerText =`Sum of ${val1} and ${val2} is ${sum}`;

}