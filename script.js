const displayValorAnterior = document.getElementById("valor-anterior");
const displayValorActual = document.getElementById("valor-actual");
const botonesNumeros = document.querySelectorAll(".numeros");
const botonesOperadores = document.querySelectorAll(".operadores");
const borrar = document.getElementById("borrar");
const borrarTodo = document.getElementById("borrar-todo");
const calculadora = new Calculadora();
let number1,number2;
let number = 0;
let operacion;
let contador = 0;

botonesNumeros.forEach(boton => {
    boton.addEventListener("click",() => { 
        if(displayValorActual.innerHTML.includes(".") && boton.innerHTML == "."){
            return;
        }
        displayValorActual.innerHTML = displayValorActual.innerHTML+boton.innerHTML;              
    })
});

borrar.addEventListener("click",()=>{
    displayValorActual.innerHTML = displayValorActual.innerHTML.toString().slice(0,-1);
})

borrarTodo.addEventListener("click", () =>{
    displayValorActual.innerHTML = "";
    displayValorAnterior.innerHTML = "";
})

botonesOperadores.forEach(boton => {
    boton.addEventListener("click",() =>{
        switch(boton.innerHTML){
            case "+":
                displayValorAnterior.innerHTML = displayValorActual.innerHTML+boton.innerHTML;   
                displayValorActual.innerHTML="";
                number1 = parseFloat(displayValorAnterior.innerHTML.toString());        
                operacion = "sumar";    
                break;
            case "-":
                displayValorAnterior.innerHTML = displayValorActual.innerHTML+boton.innerHTML;   
                displayValorActual.innerHTML="";
                number1 = parseFloat(displayValorAnterior.innerHTML.toString());        
                operacion = "restar";
                break;
            case "X":
                displayValorAnterior.innerHTML = displayValorActual.innerHTML+boton.innerHTML;   
                displayValorActual.innerHTML="";
                number1 = parseFloat(displayValorAnterior.innerHTML.toString());        
                operacion = "multiplicar";
                break;
            case "/":
                displayValorAnterior.innerHTML = displayValorActual.innerHTML+boton.innerHTML;   
                displayValorActual.innerHTML="";
                number1 = parseFloat(displayValorAnterior.innerHTML.toString());        
                operacion = "dividir";
                break;
            case "=":
                number2 = parseFloat(displayValorActual.innerHTML.toString());
                operar();
                displayValorAnterior.innerHTML = "";
                displayValorActual.innerHTML = number;
                contador = 1;
                break;
        }
    })
})

function operar(){
    switch(operacion){
        case "sumar":                 
                number = calculadora.sumar(number1,number2);
                break;
            case "restar":
                number = calculadora.restar(number1,number2);
                break;
            case "multiplicar":
                number = calculadora.multiplicar(number1,number2);
                break;
            case "dividir":
                number = calculadora.dividir(number1,number2);
                break;            
    }
}

