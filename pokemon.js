// Obtenemos el pokemon que se ha seleccionado aleatoriamente y lo mostramos en pantalla con su imagen y nombre

let pokemon = ["Arcanine", "Charizard", "Eevee", "Pidgeot", "Pikachu", "Poochyena", "Sharpedo", "Swellow", "Tauros", "Vulpix"]
var rand = Math.floor(Math.random() * pokemon.length);
var rValue = pokemon[rand];
var imagen = rValue + ".png";
var pathImagen = "./pokemon/";
document.getElementById('poke').innerHTML = "<b>El nombre del pokemon es:</b> " + rValue;
document.getElementById('img').innerHTML = "<img src='" + pathImagen + imagen + "' higth=150 width=150 >";

// Recogemos los datos del formulario con nombre formulario
var formulario = document.getElementById('formulario');
// Recogemos el valor seleccionado en el select
var select = document.getElementById('select');

//funcion calcula el porcetaje de probabilidad de captura
function calcularPorcentaje() {
    borrarP();
    var lanzamiento = document.getElementById('select').value;
    var lanzamientoTexto = document.getElementById('select').options[document.getElementById('select').selectedIndex].text;
    var tipoBola = radio();
    var tipoPokemon = tipoPokemonGo();
    var bola = 0;
    if (tipoBola == "bola curva") {
        bola = 15;
    }
    var resultado = 0;
    var tipopokeball = parseInt(tipoPokeball());

    if (tipopokeball !== 100) {
        if (tipoPokemon == "raro") {
            resultado = ((parseInt(lanzamiento) + parseInt(bola)) / 2) + tipopokeball;
        } else {
            resultado = (parseInt(lanzamiento) + parseInt(bola)) + tipopokeball;
        }
        document.getElementById('probabilidad').innerHTML = "El Pokemon,<b> " + rValue + "</b> tiene esta probabilidad de atraparse con tiro: ";
        document.getElementById('tiro').innerHTML = " <p> -Tu tiro es un <b>" + lanzamientoTexto.toLowerCase() + " + " + lanzamiento + "</b></p>";
        document.getElementById('tirbola').innerHTML = " <p> -Tiro con <b>" + tipoBola + " + " + bola + "</b></p>";

        document.getElementById('totalCaptura').innerHTML = "<br>Puntuación de captura: <b>" + (parseInt(lanzamiento) + parseInt(bola)) + "</b>";
        document.getElementById('tipoPokemon').innerHTML = "-Pokemon:  <b>" + tipoPokemon.toUpperCase() + "</b>";

        document.getElementById('resultado').innerHTML = "<b><br>PUNTUACIÓN TOTAL " + resultado + " puntos </b> ";
        calculoFinal(resultado, rValue);
    }
    else {
        document.getElementById('resultado').innerHTML = "<b><br>Capturación directa </b> ";
    }


}

//funcion el tipo de pokeball
function tipoPokeball() {
    var pokeballs = document.getElementById('pokeballs').value;
    return pokeballs;
}

//funcion el tipo de bola
function radio() {
    var tipoBola = document.getElementsByName('tiro');
    for (i = 0; i < tipoBola.length; i++) {
        if (tipoBola[i].checked) {
            var bola = tipoBola[i].value;

        };
    };
    return bola;
};
//funcion el tipo de pokemon
function tipoPokemonGo() {
    var tipoPokemon = document.getElementsByName('pokemon');
    for (i = 0; i < tipoPokemon.length; i++) {
        if (tipoPokemon[i].checked) {
            var pokemon = tipoPokemon[i].value;

        };
    };
    return pokemon;

}
//Genera el numero aleatorio
function random() {

    // Calculamos el número aleatorio entre 10 y 120
    var random = Math.floor(Math.random() * 110) + 10;
    return random;
}
//calcula resltado final
function calculoFinal(resultado, rValue) {
    var randomN = random();
    console.log(resultado);
    if (resultado >= randomN) {
        document.getElementById("resultadoFinal").innerHTML = "<p>- ¡Enhorabuena!¡Has atrapado a <b>" + rValue + "!</b></p>";

    } else {
        document.getElementById("resultadoFinal").innerHTML = "<p>-Làstima, has fallado! <b>" + rValue + "</b> ha escapado </p>";
    }
}
//borra pantalla 
function borrarP() {
    document.getElementById("probabilidad").innerHTML = "";
    document.getElementById("tiro").innerHTML = "";
    document.getElementById("tirbola").innerHTML = "";
    document.getElementById("totalCaptura").innerHTML = "";
    document.getElementById("tipoPokemon").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("resultadoFinal").innerHTML = "";
}