// Máximo e mínimo entre dois valores

const primeiroNumber = document.querySelector("#primeiro");
const segundoNumber = document.querySelector("#segundo");
const btnVerficar = document.querySelector("#verificarMaxMin"); 

const campoMaxMin = document.getElementById("campoMaxMin"); 

function maxMin(num1, num2){
    let number1 = parseInt(num1.value); 
    let number2 = parseInt(num2.value); 

    let max = 0; 
    let min = 0; 
    if(number1 > number2){
        max += number1; 
        min += number2; 
    } else{
        max += number2; 
        min += number1;
    }

    return `Número máximo ${max} e mínimo ${min}`; 
}

btnVerficar.addEventListener("click", () => {
    campoMaxMin.innerHTML = maxMin(primeiroNumber, segundoNumber);
})
