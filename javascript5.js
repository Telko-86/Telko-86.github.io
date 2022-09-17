function validar() {
    event.preventDefault();
    // VALIDACION NOMBRE
    var nombre = document.getElementById("nom").value;
    if (nombre == null || nombre.length < 5 || nombre.length > 24) {
        mensaje(" El nombre debe ser mayor o igual a 5 y menor de 24","style='color:red;'");
        return false;
    }

    //VALIDACIO EMAIL
    var email = document.getElementById("email").value;
    if (email == null || email.length == 0 || !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email))) {
        mensaje("El email no puede estar vacio, debe introducir un email valido.","style='color:red;'");
        return false;
    }

    //VALIDACION PASSWORD
    var pass = document.getElementById("pass").value;
    var pass2 = document.getElementById("pass2").value;
        //LONGUITUD PASSWORD
        if ( pass == null || pass.length != 8){
            mensaje("La password deben tener 8 digitos","style='color:red;'");
            return false;
        }else if(!/(?=.*[a-z-A-Z])(?=.*[0-9])(?=.*[-<>_])/.test(pass)){
            mensaje("El password debe contener al menos una letra un numero y un caracter  especial[-<>_]","style='color:red;'");
            return false;
        }
        //QUE AMBAS CONTRASEÑAS COINCIDAN
        if (pass != pass2) {
            mensaje("Las passwords deben de coincidir","style='color:red;'");
        return false;
        }


    //VALIDACION COMUNIDAD Y PROVINCIA
    var comunitat = document.formulari.comunitat.value;
    var provincia = document.formulari.provincia.value;
    
        if(comunitat==null || comunitat.length==0){
            mensaje("Debe seleccionar una comunidad","style = 'color:red;'");
            return false;
        }
        if(provincia==null || provincia.length==0){
            mensaje("Debe seleccionar una provincia","style='color:red;'");
            return false;
        }
        if(comunitat=="Catalunya" && provincia == "Cap Provincia" ){
            mensaje("Ha selecionado Catalunya, por lo que debe seleccionar una de sus provincias","style='color:red;'");
            return false;
        }
        if(comunitat=="Altres" && provincia != "Cap Provincia" ){
            mensaje("Ha selecionado Altres, por lo que debe seleccionar Cap Provincia","style='color:red;'");
            return false;
        } 
    //VAILDACION DATA DE NAIXEMENT
    var data = document.getElementById("DateNaixament").value;
    var edad= calculoEdad(data);
    var fecha = data.split("-");

    if(data == null || data.length==0){
        mensaje("La fecha no esta vacia","style='color:red;'");
        return false;
    }


    //validamos si es mayor de edad y nació despues del 1900
    if(edad < 18 || fecha[0] <= "1900" ){
       
        mensaje("Debe ser mayor de 18 y el año debe ser superior a 1900","style='color:red;'");
        return false;
    }
    envioDatos();
    limpiar();

    mensaje("Formulario enviado satisfactoriamente","style='color:green;'");

    
return true;
      
}  

// Calculamos la edad a partir de la edad de nacimiento
function calculoEdad(fecha){
    var fechaActual = new Date();
    var fechaNaixement= new Date(fecha);

    var edad  = fechaActual.getFullYear() - fechaNaixement.getFullYear();
    var m = fechaActual.getMonth() - fechaNaixement.getMonth();

    if ( m < 0 || (m===0 && fechaActual.getDate() < fechaNaixement.getDate())){
        edad--;
    }
return edad;
}

// funcion deenvio para los mensajes de errores
  function mensaje(texto, tipo){
        var mensaje = document.getElementById("mensaje");

        mensaje.innerHTML="<b><p " + tipo + ">" + texto + "</p></b>";
        
    }

//function para limpiar mensaje
function limpiar(){
    mensaje("","style='color:white;'");
    document.getElementById("nom").value="";
    document.getElementById("email").value="";
    document.getElementById("pass").value="";
    document.getElementById("pass2").value="";
    document.getElementById("DateNaixament").value="";
    document.querySelectorAll('[name=comunitat]').forEach((x) => x.checked = false);
    document.formulari.provincia.value="";
    
}
//Ventana que pasa los datos enviados
function envioDatos(){

    mensaje("","style='color:white;'");
    //abir una ventana con los datos del formulario
    var ventana = window.open("","Datos del formulario"," width=500, height=500");
    ventana.document.write("<h1>Datos del formulario</h1>");
    ventana.document.write("<p>Nombre: " + document.getElementById("nom").value  + "</p>");
    ventana.document.write("<p>Email: " + document.getElementById("email").value + "</p>");
    ventana.document.write("<p>Password: " + document.getElementById("pass").value + "</p>");
    ventana.document.write("<p>Comunidad: " + document.formulari.comunitat.value + "</p>");
    ventana.document.write("<p>Provincia: " + document.formulari.provincia.value + "</p>");
    ventana.document.write("<p>Fecha de nacimiento: " + document.getElementById("DateNaixament").value + "</p>");
    ventana.document.write("<br><h2>Formulario registrodo satisfactoriamente</h2>");
    
    ventana.document.write("<button onclick='window.close()'>cerrar ventana </button>");
    

}