
var poolDeDados = [
    {nombre: "d4", caras: 4},{nombre: "d6", caras: 6},{nombre: "d8", caras: 8},
    {nombre: "d10", caras: 10},{nombre: "d12", caras: 12},
    {nombre: "d20", caras: 20},{nombre: "d100", caras: 100}
    ];

function encontrarTipo(nombre) {
    for (var i = 0; i <= poolDeDados.length; i++) {
        if (poolDeDados[i].nombre === tipoDeDado) {
            var max = Number(poolDeDados[i].caras);
            //console.log(poolDeDados[i].nombre, poolDeDados[i].caras);
            //console.log(max);


            return Number(max);
        }
    }
    return false;
}


var tipoDeDado = prompt("Escoge un tipo de dado: d4, d6, d8, d10, d12, d20, d100");
var cantidadDeDados = prompt("Cuantos lanzas?");

encontrarTipo(tipoDeDado);



function randomizar(cantidadDeDados,encontrarTipo) {  
    if (!isNaN(cantidadDeDados)) {
        for (var i = 0; i < cantidadDeDados; i++) {
        var lanzada = Math.round(Math.random()*(encontrarTipo(tipoDeDado)-1)+1);
        console.log(Number(lanzada));
        //var lanzadasUser = [lanzadasUser] + [lanzada] + " + ";
            if (lanzadasUser === undefined) {
            var lanzadasUser = [1,2];
            lanzadasUser.push(lanzada);
            } else {
                lanzadasUser.push(lanzada)
            }

        } 
        lanzadasUser.shift();
        lanzadasUser.shift();
        console.log(lanzadasUser);
        var sumaDados = 0;
        for (var i=0; i < lanzadasUser.length; i++) {
            
            sumaDados = lanzadasUser[i] + Number(sumaDados);
        } 
         console.log(lanzadasUser + " = " + sumaDados);
    } else {
        alert("La cantidad no es un numero valido!!")
    }
}

randomizar(cantidadDeDados, encontrarTipo);
 
