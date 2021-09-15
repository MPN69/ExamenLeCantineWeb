function fibonacciSecuencia(){
    var num1 = document.getElementById("numero").value
    
    var resultado = [];

    if(num1 === 1) {
        resultado = [0];
    } else if (num1 === 2) {
        resultado = [0, 1];  
        document.getElementsById("numero").innerHTML = resultado;
    } else {
        resultado = [0, 1];
        for (var i = 2; i < num1; i++) {
            resultado.push(resultado[resultado.length - 2] + resultado[resultado.length - 1]);
            document.getElementById("resultado").innerHTML = resultado;
        }
    }
    document.getElementById('resultado').innerHTML = resultado
  }