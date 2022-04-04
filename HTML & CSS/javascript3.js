//Ejercicio 1
function ejercicio1() {
    let nom = "Sergi";
    var edat = 21;
    let poblacio = "palleja";
    let prova = document.getElementById("prova");
    prova.innerHTML = "El meu nom és " + nom + " i tinc " + edat + " anys i visc a " + poblacio;



}
//Ejercicio 2
function ejercicio2() {
    let amics = ["pepito", "pepita", "jose"];
    let mobils = ["634744434", "645345367", "632345353"];
    let prova1 = document.getElementById("prova1");

    for (let i = 0; i < amics.length; i++) {

        prova1.innerHTML += "El mòbil de " + amics[1] + " és " + mobils[1] + "<br>";

    }

}
  //Ejercicio 3
  var notas;
  var inputValue;
  function ejercicio3(src="Notas.html") {
    window.open(src="Notas.html","Ventana","width=500,height=100,scrollbars=NO");
    Ventana()    
  }

const Ventana = () => {
  ejercicio3("Notas.html");
  }

  const getValueInput = () => {
   for (var i = 0; i < inputValue; i++) {
     inputValue = notas;
     window.alert(notas);
      
  
    }

}

  //Ejercicio 4 