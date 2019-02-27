var btns = [];
var secciones = [seccion1,seccion2,seccion3,seccion2alt,seccion4,seccion4_1,seccion5];
dic = { home2:[seccion2, "home2 animated fadein"],
home2alt:[seccion2alt, "home2alt animated fadein"],
instrucciones:[seccion4, "instrucciones animated fadein"],
instrucciones2:[seccion4_1, "instrucciones2 animated fadein"],
creditos:[seccion5, "creditos animated fadein"],
juego:[seccion3, "juego animated fadein"]};


window.onload = inicio;

function inicio() {

  iniciarvariables();
  asignareventos();

  
}

function iniciarvariables() {
 
  btns.push(document.getElementById("boton_iniciar"));
  btns.push(document.getElementById("boton_iniciar_inicio"));
  btns.push(document.getElementById("boton_instrucciones_inicio"));
  btns.push(document.getElementById("boton_forward_instrucciones"));
  btns.push(document.getElementById("boton_backward_instrucciones2"));
  btns.push(document.getElementById("boton_iniciar_instrucciones2"));
  btns.push(document.getElementById("boton_volver_instrucciones2"));
  btns.push(document.getElementById("boton_creditos_inicio"));
  btns.push(document.getElementById("boton_volver_creditos"));
  btns.push(document.getElementById("boton_home_juego"));
  btns.push(document.getElementById("boton_pausa_juego"));
  btns.push(document.getElementById("boton_iniciar_inicio_alt"));
  btns.push(document.getElementById("boton_instrucciones_inicio_alt"));
  btns.push(document.getElementById("boton_creditos_inicio_alt"));


}

function asignareventos() {

  for (const key in btns) {

    btns[key].addEventListener("click", procesareventoclick);

  }

}

function procesareventoclick(event) {

  for (const key in secciones) {
      secciones[key].className="ocultar";
    }

 switch(event.target.id) {
  case "boton_iniciar":
    dic.home2[0].className= dic.home2[1];
    
    break;

  case "boton_iniciar_inicio":
    dic.juego[0].className= dic.juego[1];
    break;

  case "boton_instrucciones_inicio":
    dic.instrucciones[0].className= dic.instrucciones[1];
    break;

  case "boton_forward_instrucciones":
    dic.instrucciones2[0].className= dic.instrucciones2[1];
    break;

  case "boton_backward_instrucciones2":

    dic.instrucciones[0].className= dic.instrucciones[1];
    
    break;

  case "boton_iniciar_instrucciones2":

    dic.juego[0].className= dic.juego[1];
    
    break;

  case "boton_volver_instrucciones2":
    dic.home2[0].className= dic.home2[1];
    break;

  case "boton_creditos_inicio":
    dic.creditos[0].className= dic.creditos[1];
    break;
  
  case "boton_volver_creditos":
    dic.home2[0].className= dic.home2[1];
    break;

  case "boton_home_juego":
    dic.home2alt[0].className= dic.home2alt[1];
    break;

  case "boton_pausa_juego":
    dic.home2alt[0].className= dic.home2alt[1];
  break;

  case "boton_instrucciones_inicio_alt":
    dic.instrucciones[0].className= dic.instrucciones[1];
  break;

  case "boton_creditos_inicio_alt":
    dic.creditos[0].className= dic.creditos[1];
  break;

  case "boton_iniciar_inicio_alt":
    dic.juego[0].className= dic.juego[1];
  break;

  default:
    // code block
}
 

}
