function converterMoeda() {
    
    var valorEmReal = parseFloat(document.getElementById("valorEmReal").value);

   
    var taxaDolar = 4.91; 
    var taxaEuro = 5.25; 
    var taxaLibra = 6.02; 

  
    var valorEmDolar = valorEmReal * taxaDolar;
    var valorEmEuro = valorEmReal * taxaEuro;
    var valorEmLibra = valorEmReal * taxaLibra;


    var resultado = "Valor em Dólar: $" + valorEmDolar.toFixed(2) +
                    "<br>Valor em Euro: €" + valorEmEuro.toFixed(2) +
                    "<br>Valor em Libra: £" + valorEmLibra.toFixed(2);

    document.getElementById("resultado").innerHTML = resultado;
  }