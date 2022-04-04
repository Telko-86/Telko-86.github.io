//Declaramos las varibles
var puntuacionIA = 0;
var puntuacionUsuari = 0;
var selecionUsuari;
var res;
var select = document.querySelector("#item");

//Ponemos a la escucha el Select a la espera de que el usuario eliga
select.addEventListener('change', elegir);

//Visualizamos los contadores a 0
imprimir();

//Esta funcion arranca el juego y genera un  numero aleatorio del 0 -> 3 assignando 0-1 piedra, 1-2 papel y 2-3 tijera para la IA
function jugar(){
	var min = 0;
	var max = 3;
	var x = Math.random() * (max - min) + min;
	document.getElementById("mensaje").innerHTML = "";
	if(x <= 1){
		res = "piedra"
		}else if(x>1 && x <= 2){
		res = "papel"
		}else{
		res = "tijera"
	}
	ganar();
}

//Esta funcion detecta la elecion  del usuario
function elegir(){
	var valor = select.value;
	if(valor === "papel"){
		selecionUsuari = valor
	}
	if(valor === "piedra"){
		selecionUsuari = valor
	}
	if(valor === "tijera"){
		selecionUsuari = valor
	}	
}

//Esta funcion compara las distitnas opciones entre usuario y IA.
function ganar(){
	//comprobamos piedra con papel
	if(selecionUsuari ===  "piedra" && res === "papel"){
		document.getElementById("imgIA").innerHTML = '<img src="media/papel.png" height="60px" width="60px"/> ';
		document.getElementById("imgUser").innerHTML = '<img src="media/piedras.png" height="60px" width="60px"/> ';
		ganarIA();
		//comprobamos piedra con tijera
		}else if(selecionUsuari === "piedra" && res === "tijera"){
		document.getElementById("imgIA").innerHTML = '<img src="media/tijeras.png" height="60px" width="60px"/> ';
		document.getElementById("imgUser").innerHTML = '<img src="media/piedras.png" height="60px" width="60px"/> ';
		ganarUsuario();
		//comprobamos papel con tijera
		}else if(selecionUsuari === "papel" && res === "tijera"){
		document.getElementById("imgIA").innerHTML = '<img src="media/tijeras.png" height="60px" width="60px"/> ';
		document.getElementById("imgUser").innerHTML = '<img src="media/papel.png" height="60px" width="60px"/> ';
		ganarIA();		
		//comprobamos papel con piedra
		}else if(selecionUsuari === "papel" && res === "piedra"){
		document.getElementById("imgIA").innerHTML = '<img src="media/piedras.png" height="60px" width="60px"/> ';
		document.getElementById("imgUser").innerHTML = '<img src="media/papel.png" height="60px" width="60px"/> ';
		ganarUsuario();
		//comprobamos tijera con papel
		}else if(selecionUsuari === "tijera" && res === "papel"){
		document.getElementById("imgIA").innerHTML = '<img src="media/papel.png" height="60px" width="60px"/> ';
		document.getElementById("imgUser").innerHTML = '<img src="media/tijeras.png" height="60px" width="60px"/> ';
		ganarUsuario();
		//comprobamos tijera con piedra
		}else if(selecionUsuari === "tijera" && res === "piedra"){
		document.getElementById("imgIA").innerHTML = '<img src="media/piedras.png" height="60px" width="60px"/> ';
		document.getElementById("imgUser").innerHTML = '<img src="media/tijeras.png" height="60px" width="60px"/> ';
		ganarIA();
		}else{
				
		//Aqui detecta los empate
		let empate = "Jugada empatada";
		document.getElementById("ia").innerHTML = "IA: " + res;
		document.getElementById("usuari").innerHTML = "Usuari: " +  selecionUsuari;
		document.getElementById("mensaje").innerHTML = empate;	
		if(res == "tijera"){
			document.getElementById("imgIA").innerHTML = '<img src="media/tijeras.png" height="60px" width="60px"/> ';
			document.getElementById("imgUser").innerHTML = '<img src="media/tijeras.png" height="60px" width="60px"/> ';
		}
		else if(res == "papel"){
			document.getElementById("imgIA").innerHTML = '<img src="media/papel.png" height="60px" width="60px"/> ';
			document.getElementById("imgUser").innerHTML = '<img src="media/papel.png" height="60px" width="60px"/> ';
		}
		else{
			document.getElementById("imgIA").innerHTML = '<img src="media/piedras.png" height="60px" width="60px"/> ';
			document.getElementById("imgUser").innerHTML = '<img src="media/piedras.png" height="60px" width="60px"/> ';
		}
		
	}
	if(puntuacionUsuari == 5 ){
		document.getElementById("mensaje").innerHTML = "Partida ganada por el usuario";
		puntuacionIA=0;
		puntuacionUsuari=0;
		imprimir();
	}
	if(puntuacionIA == 5){
		document.getElementById("mensaje").innerHTML = "Partida ganada por la IA";
		puntuacionIA=0;
		puntuacionUsuari=0;
		imprimir();
	}
}	


//Funcion se executa cuando gana la IA
function ganarIA(){
	puntuacionIA++;
	document.getElementById("ia").innerHTML = "IA: "; //+ res;
	document.getElementById("usuari").innerHTML = "Usuari: "; //+ selecionUsuari;
	document.getElementById("contador_ia").innerHTML =puntuacionIA;
	document.getElementById("contador_user").innerHTML = puntuacionUsuari;
}

//Funcion se executa cuando gana el usuario
function ganarUsuario(){
	puntuacionUsuari++;
	document.getElementById("usuari").innerHTML = "Usuari: " ;//+ selecionUsuari;
	document.getElementById("ia").innerHTML = "IA: " ;//+ res;
	document.getElementById("contador_user").innerHTML = puntuacionUsuari;
	document.getElementById("contador_ia").innerHTML = puntuacionIA;
}


function imprimir(){
	document.getElementById("contador_ia").innerHTML = puntuacionIA;
	document.getElementById("contador_user").innerHTML = puntuacionUsuari;
}		