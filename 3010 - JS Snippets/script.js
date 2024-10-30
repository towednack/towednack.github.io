//  GLOBAL  //
var nomeList = []
//  End of GLOBAL.  //
//  "Switch website colors." code.  //
function switchStylesheet() {
    let stylesheet = document.getElementById('stylesheet');
    if (stylesheet.getAttribute('href') == 'style.css') {
        stylesheet.setAttribute('href', 'styleDark.css');
        document.getElementById("switchStylesheet").innerHTML = "Switch page to bright colors."
    } else {
        stylesheet.setAttribute('href', 'style.css');
        document.getElementById("switchStylesheet").innerHTML = "Switch page to dark colors."
    }
}
//  End of code.  //

//  "Is it odd?" code.  //
function isItOdd(num) {
    var num = prompt('Digite qualquer número abaixo.');
    if (num % 2 == 0) {
        if (num == '') {
            alert("Você não inseriu nenhum número.")
        }
        else {
            alert(num + " é um número par.");
        }
    }
    else {
        if (isNaN(num) == true) {
            alert('"' + num + '"' + " não é um número.")
        }
        else {
            alert(num + " é um número ímpar.");
        }
    }
}
//  End of code.  //

//  "Is it underage?" code.  //
function isItUnderage() {
    const age = prompt('Digite a idade do indivíduo.');
    if (age >= 18) {
        ageResponse = 'maior'
    }
    else {
        ageResponse = 'menor'
    }
    alert("Este indivíduo é " + ageResponse + " de idade.");
}
//  End of code.  //

//  "Mini calculator" code.  //
function miniCalculator() {
        const num1 = prompt("Digite um número.");
        const operacao = prompt("Digite o sinal de operação (+, -, /, *).")
        const num2 = prompt("Digite outro número.");
        let resultado;

        if (operacao === "+") {
            resultado = +num1 + +num2;
        }
        else if (operacao === "-") {
            resultado = +num1 - +num2;
        }
        else if (operacao === "/") {
            resultado = +num1 / +num2;
        }
        else if (operacao === "*") {
            resultado = +num1 * +num2;
        }
        else {
            alert("O sinal de operação não é válido.")
        }
        alert("O resultado da conta (" + num1 + operacao + num2 + ") é (" + resultado + ").")
}
//  End of code.  //
//  "showArrayElement" code.  //
function showArrayElement() {
    const lista = ["hocus", "pocus", "pink", "panther"];
    document.getElementById("showArrayElementList").innerHTML = "[" + lista + "]";
    const indice = prompt("Digite a posição de um item dentro da lista.");

    if (indice <= 3){
        alert("O elemento da lista é '" + lista[indice] + "'.");
    }
    else {
        alert("Este valor é muito alto! Tente algum valor entre 0 e " + (lista.length - 1) + ".");
    }
}
//  End of code.  //
//  "Count from Number" code.  //
function countFromNumber() {
    const countNumbersList = []
    var isDecrease = document.getElementById("switchIncreaseDecrease").checked;
    
    if (isDecrease) {
        const n = Number(prompt("Para fazer uma contagem decrescente, digite um número:"));
        for(let i = n; i>0; i--){
            console.log(i);
            countNumbersList.push(i);
        }
        alert("Os números, em ordem decrescente, são: " + countNumbersList);
    } 
    else {
        const n = Number(prompt("Para fazer uma contagem crescente, digite um número:"));
        for(let i = 1; i <=n; i++){
            console.log(i);
            countNumbersList.push(i);
        }
        alert("Os números, em ordem crescente, são: " + countNumbersList);
    }
}
//  End of code.  //
//  "Numbers Sum" code.  //
function sum2Numbers() {
    const num1 = document.getElementById('sum2NumbersNum1').value
    const num2 = document.getElementById('sum2NumbersNum2').value

    let resultado = +num1 + +num2;

    alert("A soma dos dois números é igual a " + resultado + ".");
}
//  End of code.  //
//  "Average of 3 numbers" code  //
function average3Numbers() {
    var isWeighted = document.getElementById("switchWeighted").checked;

    if (isWeighted) {
        const num1 = prompt("Para calcular a média ponderada, insira o primeiro número.")
        const num1Weight = prompt("Qual o peso do primeiro número?")
        const num2 = prompt("Insira o segundo número.")
        const num2Weight = prompt("Qual o peso do segundo número?")
        const num3 = prompt("Insira o terceiro número.")
        const num3Weight = prompt("Qual o peso do terceiro número?")

        const resultado = (((+num1 * num1Weight)+(+num2 * num2Weight)+(+num3 * num3Weight))/3)

        alert("A média ponderada dos 3 números é " + resultado);
    }
    else {
        const num1 = prompt("Para calcular a média aritmética, insira o primeiro número.")
        const num2 = prompt("Insira o segundo número.")
        const num3 = prompt("Insira o terceiro número.")

        const resultado = ((+num1 + +num2 + +num3)/3)

        alert("A média aritmética dos 3 números é " + resultado);
    }
}
//  End of code.  //
//  "Is it negative?" code.  //
function isItNegative() {
    const num = prompt("Para saber se um número é negativo, digite-o abaixo.")

    if (num < 0) {
        alert("O número " + num + " é negativo. ✅");
    }
    else {
        alert("O número " + num + " não é negativo. ❌");
    }
}
//  End of code.  //
//  "Is it prime?" code.  //
function isItPrime() {
    const num = prompt("Para saber se um número é primo, digite-o abaixo.")

    var sqrtnum=Math.floor(Math.sqrt(num));
    var prime = num != 1;
    for(var i=2; i<sqrtnum+1; i++) {
        if(num % i == 0) {
            prime = false;
            break;
        }
    }

    if (prime == false) {
        alert("O número " + num + " não é primo.");
    }
    else {
        alert("O número " + num + " é primo.");
    }
}
//  End of code.  //
//  "Repeat Message" code.  //
function repeatMessage() {
    var inputText = document.getElementById("inputText").value
    const repeatTimes = prompt("Quantas vezes deseja que o texto seja repetido?")

    if (document.getElementById("switchRepeatMessageSpace").checked) {
        inputText = inputText + " "
    }

    document.getElementById("inputText").value = inputText.repeat(repeatTimes);
}
//  End of code.  //
//  "Celsius to Fahrenheit" code.  //
function celsiusToFahrenheit() {
    var hotOrCold
    const isFahrenheit = document.getElementById("switchCelsiusFahrenheit").checked

    if (isFahrenheit) {
        const inputTemperature = prompt("Digite a temperatura em Fahrenheit.")
        const resultado = (+inputTemperature-32)/1.8

        if (resultado < 20) {
            hotOrCold = "🥶"
        }
        else {
            hotOrCold = "🌞"
        }

        if (inputTemperature == "") {
            alert("O valor não pode ser vazio!");
        }
        else {
            alert(inputTemperature + "°F é igual a " + resultado + "°C. " + hotOrCold);
        }
    }
    else {
        const inputTemperature = prompt("Digite a temperatura em Celsius.")
        const resultado = +inputTemperature*1.8+32

        if (resultado < 68) {
            hotOrCold = "🥶"
        }
        else {
            hotOrCold = "🌞"
        }

        if (inputTemperature == "") {
            alert("O valor não pode ser vazio!");
        }
        else {
            alert(inputTemperature + "°C é igual a " + resultado + "°F. " + hotOrCold);
        }
    }
}
//  End of code.  //
//  "Simple Multiplication Table" code.  //
function multiplicationTable() {
    const multiplicationInput = document.getElementById("inputMultiplier").value
    const multiplicationTableList = []

    for (let i = 1; i < 11; i++) {
        multiplicationTableList.push(multiplicationInput + "x" + i + "=" + multiplicationInput*i);
        console.log(multiplicationInput + "x" + i + "=" + multiplicationInput*i);
    }

    if (multiplicationInput == "") {
        alert("Nada a ser calculado.");
    }
    else {
        alert("A tabuada de " + multiplicationInput + " é [" + multiplicationTableList + "].");
    }
}
//  End of code.  //
//  "Count string characters." code.  //
function countStringCharacters() {
    const inputWord = document.getElementById("inputWord").value

    if (inputWord.includes(" ")) {
        alert("Digite apenas uma palavra!");
    }
    else {
        alert("A palavra " + inputWord + " tem " + inputWord.length + " caracteres.");
    }
}
//  End of code.  //
//  "Is it positive?" code.  //
function isItPositive() {
    const num = prompt("Para saber se um número é positivo, digite-o abaixo.")

    if (num != "") {
        if (num > 0) {
            alert("O número " + num + " é positivo. ✅");
        }
        else {
            alert("O número " + num + " não é positivo. ❌");
        }
    }
    else {
        alert("O campo estava vazio!");
    }
}
//  End of code.  //
//  "Show names array." code.  //
function showNamesArrayAdd() {
    var inputNome = document.getElementById("inputNome").value

    if (inputNome != "") {
        nomeList.push(inputNome);
        document.getElementById("inputNome").value = "";
    }
    else {
        alert("Não há nada digitado no campo de 'Nome' para ser adicionado à lista!");
    }
}
function showNamesArray() {
    if (nomeList == "") {
        alert("A lista está vazia, adicione um nome para começar.");
    }
    else {
        alert("A lista de nomes é [" + nomeList + "].");
    }
}
//  End of code.  //