if(true){
    document.write("Estou no bloco if(verdadeiro")
}else{
    document.write("Estou no bloco if (falso)")
}

alert("Bem vindo a nossa calculadora!")
var num1 = Number(prompt("Digite o seu primeiro numero"))
var operador = prompt("Digite o operador")
var num2 = Number(prompt("Digite o seu segundo numero"))

if(operador === "+"){
    var calcular = num1 + num2 
alert("A soma dos números e de: "+calcular)
}
else if(operador === "-" || operado === "subtrair"){
    var calcular = num1 - num2
    alert("A subtração dos números é de: " +calcular)
}
else if(operador === "*" || operador === "multiplicar"){
    var calcular = num1 * num2
    alert("A multiplicação dos números é de: " +calcular)
}
else if(operador === "/" || operador === "dividir   |"){
    var calcular = num1 / num2
    alert("A divisão dos números é de: " +calcular )
}
else{
    alert("insira um operador válido!")
    location.reload();
}
//var operador = prompt("Digite o operador")
//Operadores
//+ soma
//-sobtração
//*multiplicar
// / dividir
// % resto de divisão
// ** potencia 

//operadores logicos 
// && AND, amabas as condiçõe devem ser verdadeiras
// (shift+\) || OR ou, um condição ou mais  deve ser verdadeira
// !NOT não, inverte o resultado 

