function Calcular(id1, id2){
    var operador = document.getElementById("operaciones").value;
    var num1 = document.getElementById(id1).value;
    var num2 = document.getElementById(id2).value;
    switch(operador)
    {
        case "sumar":
            var expresion = (Number(num1)+Number(num2));
            resultado = eval(expresion); break;
        case "restar":
            var expresion = num1 - num2;
            resultado = eval(expresion); break;
        case "multiplicar":
            var expresion = num1 * num2;
            resultado = eval(expresion); break;
         case "dividir":
            var expresion = num1 / num2;
            resultado = eval(expresion); break;
        default:
            break;
    }

    document.getElementById("salida").innerHTML="Resultado:"+resultado;

}