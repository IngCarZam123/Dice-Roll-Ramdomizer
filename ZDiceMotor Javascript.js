


var h3 = document.querySelector("h3");
var h5 = document.querySelector("h5");

// input de Usuario
  var tipoDeDado = document.getElementById("diceSelector");
  var cantidadDeDados = document.getElementById("cantidad");
  var rollButton = document.getElementById("rollButton");
  var options = document.getElementsByTagName("option");
  var carasXGlobal = 0;

tipoDeDado.addEventListener("input", createDXValue);
function createDXValue() {

    if (tipoDeDado.value === "x") {
        h5.innerHTML = h5.innerHTML + '<input type="number" min="1" max="1000" placeholder="Dado Custom" id="caraX">';
        var carasXLocal = document.getElementById("caraX");
        carasXGlobal = carasXLocal;
    } else {
        carasXGlobal.remove();
        carasXGlobal.value = 0;
    }
}


// HAY QUE MODIFICARLO!!!! PARA APLICAR TANTO DADOX COMO VALORES DE SELECT

rollButton.addEventListener("click", randomizar);
function randomizar() {
    
    if (!isNaN(cantidadDeDados.value) && tipoDeDado.value === "x") {
        for (var i = 0; i < cantidadDeDados.value; i++) {
        var lanzada = Math.round(Math.random()*(carasXGlobal.value-1)+1);
        console.log(Number(lanzada));
            if (lanzadasUser === undefined) {
            var lanzadasUser = [];
            lanzadasUser.push(lanzada);
            } else {
                lanzadasUser.push(lanzada);
            }
        }        
        console.log(lanzadasUser);
        var sumaDados = 0;
        for (var i=0; i < lanzadasUser.length; i++) {
            sumaDados = lanzadasUser[i] + Number(sumaDados);
        }
        h3.innerHTML =  '<h3>' + lanzadasUser + ' = ' + sumaDados + '</h3>';
        //h3.appendChild(document.createTextNode(lanzadasUser + " = " + sumaDados));
        console.log(lanzadasUser + " = " + sumaDados);
    

    } else if (!isNaN(cantidadDeDados.value) && tipoDeDado.value !== "x"){
       for (var i = 0; i < cantidadDeDados.value; i++) {
        var lanzada = Math.round(Math.random()*(tipoDeDado.value-1)+1);
        console.log(Number(lanzada));
            if (lanzadasUser === undefined) {
            var lanzadasUser = [];
            lanzadasUser.push(lanzada);
            } else {
                lanzadasUser.push(lanzada);
            }
        }        
        console.log(lanzadasUser);
        var sumaDados = 0;
        for (var i=0; i < lanzadasUser.length; i++) {
            sumaDados = lanzadasUser[i] + Number(sumaDados);
        } 
        h3.innerHTML =  '<h3>' + lanzadasUser + ' = ' + sumaDados + '</h3>';
        //h3.appendChild(document.createTextNode(lanzadasUser + " = " + sumaDados));
        console.log(lanzadasUser + " = " + sumaDados);
    } 
} 

