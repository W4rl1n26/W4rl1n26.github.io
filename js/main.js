//variavles globales

const textAreaEntrada = document.getElementById("entrada");
const botonEncriptar = document.getElementById("encriptar");
const textAreaSalida = document.getElementById("salida");
const botonDesencriptar = document.getElementById("desencriptar");
const botonCopiar = document.getElementById("boton-copiar");
const imagenSuper = document.getElementById("contenedor-img-derecha-super");
var borderColor = false;

// variables para el modo claro.

const checkbox = document.querySelector("#activador-modos");

function cambioModo() {// ##### Función para cambiar de modo oscuro a claro. #####
  
  if (checkbox.checked) {

    //cambiando los estilos del header.

    document.querySelector("#contenedor-header").classList.remove("contenedor-header-oscuro");
    document.querySelector("#contenedor-header").classList.add("contenedor-header-claro");

    //cambiando los estilos del h1 en el header.

    document.querySelector("#contenedor-h1-header").classList.remove("contenedor-h1-header-oscuro");
    document.querySelector("#contenedor-h1-header").classList.add("contenedor-h1-header-claro");

    //Cambiando estilos del label 'checkbox'.

    document.querySelector("#label-checkbox").classList.remove("label-checkbox-oscuro");
    document.querySelector("#label-checkbox").classList.add("label-checkbox-claro");

    //Cambiando color de fondo del body.

    document.querySelector("body").style.background = "#E5E5E5";

    //Cambiando la imagen dentro del div de clase 'aviso' y color del texto.

    document.querySelector(".img-aviso").src = "imgs/notice2.svg";
    document.querySelector(".p-aviso").style.color = "#000000";

    //Cambiado el color del border en textarea de entrada.

    // if (borderColor == false) {
    //   document.querySelector("#entrada").style.border = "1px solid transparent";
    // } else {
    //   document.querySelector("#entrada").style.border = "1px solid red";
    // }
    //Cambiondo el color del texto y su fondo en los textarea.

    document.querySelector("#entrada").style.color = "#000000";
    document.querySelector("#entrada").style.background = "#DEDEDE";
    document.querySelector("#salida").style.color = "#000000";
    document.querySelector("#salida").style.background = "#DEDEDE";

    //Cambiando color de texto en el 'contenedor-img-derecha-super'.

    document.querySelector("#texto-h3-super").style.color = "#000000";
    document.querySelector("#texto-p-super").style.color = "#000000";

    //Cambiando la imagen de encripto-man del textarea de la derecha.

    document.querySelector("#img-super").src = "imgs/super-claro.svg";

    //Cambiando el color del footer.

    document.querySelector("footer").style.background = "#ffffff";

    //Cambia icono de github.

    document.querySelector("#github").src = "imgs/github2.svg";

    //Hover de los iconos del footer.

    document.querySelector("#redes-instagram").classList.remove("img-redes-oscuro");
    document.querySelector("#redes-instagram").classList.add("img-redes-claro");
    document.querySelector("#redes-github").classList.remove("img-redes-oscuro");
    document.querySelector("#redes-github").classList.add("img-redes-claro");
    document.querySelector("#redes-linkedin").classList.remove("img-redes-oscuro");
    document.querySelector("#redes-linkedin").classList.add("img-redes-claro");

    //Cambiar el color de los a de 'creditos'.

    document.querySelector(".storyset").style.color = "#000000";
    document.querySelector(".icomoon").style.color = "#000000";

  } else {

    //cambiando los estilos del header

    document.querySelector("#contenedor-header").classList.remove("contenedor-header-claro");
    document.querySelector("#contenedor-header").classList.add("contenedor-header-oscuro");

    //cambiando los estilos del h1 en el header.

    document.querySelector("#contenedor-h1-header").classList.remove("contenedor-h1-header-claro");
    document.querySelector("#contenedor-h1-header").classList.add("contenedor-h1-header-oscuro");

    //Cambiando estilos del label 'checkbox'.

    document.querySelector("#label-checkbox").classList.remove("label-checkbox-claro");
    document.querySelector("#label-checkbox").classList.add("label-checkbox-oscuro");

    //Cambiando color de fondo del body.

    document.querySelector("body").style.background = "#010409";

    //Cambiando la imagen dentro del div de clase 'aviso' y color del texto.

    document.querySelector(".img-aviso").src = "imgs/notice.svg";
    document.querySelector(".p-aviso").style.color = "#ffffff";

    //Cambiado el color del border en textarea de entrada.

    // if (borderColor == false) {
    //   document.querySelector("#entrada").style.border = "1px solid transparent";
    // } else {
    //   document.querySelector("#entrada").style.border = "1px solid red";
    // }

    //Cambiondo el color del texto y su fondo en los textarea.

    document.querySelector("#entrada").style.color = "#ffffff";
    document.querySelector("#entrada").style.background = "#0D1117";
    document.querySelector("#salida").style.color = "#ffffff";
    document.querySelector("#salida").style.background = "#0D1117";

    //Cambiando color de texto en el 'contenedor-img-derecha-super'.

    document.querySelector("#texto-h3-super").style.color = "#ffffff";
    document.querySelector("#texto-p-super").style.color = "#ffffff";

    //Cambiando la imagen de encripto-man del textarea de la derecha.

    document.querySelector("#img-super").src = "imgs/super-dark.svg";

    //Cambiando el color del footer.

    document.querySelector("footer").style.background = "#161B22";

    //Cambia icono de github.

    document.querySelector("#github").src = "imgs/github.svg";

    //Hover de los iconos del footer.

    document.querySelector("#redes-instagram").classList.remove("img-redes-claro");
    document.querySelector("#redes-instagram").classList.add("img-redes-oscuro");
    document.querySelector("#redes-github").classList.remove("img-redes-claro");
    document.querySelector("#redes-github").classList.add("img-redes-oscuro");
    document.querySelector("#redes-linkedin").classList.remove("img-redes-claro");
    document.querySelector("#redes-linkedin").classList.add("img-redes-oscuro");

    //Cambiar el color de los a de 'creditos'.

    document.querySelector(".storyset").style.color = "#ffffff";
    document.querySelector(".icomoon").style.color = "#ffffff";
  }
}

function verificarTexto(texto) {// #### Verificar si existen caracteres especiales en el texto introducido. ####

  let boleano = false;
  let codigoLetra;

  //busca caracteres especiales en el argumento 'texto'

  for (let i = 0; i < texto.length; i++) {
    codigoLetra = texto.charCodeAt(i);

    if ((codigoLetra >= 97 && codigoLetra <= 122) ||codigoLetra == 32 ||codigoLetra == 241) {

      boleano = false;

    } else {

      boleano = true;
      break;

    }
  }

  // Comprobación si existen caracteres especiales en el argumento 'texto', si existen muestra el borde en color rojo
  //del textarea de entrada indicando un error, ejecuta una de las funciones 'encriptar' o 'desencriptar'

  if (boleano) {

    document.querySelector(".aviso").classList.remove("opacity");
    textAreaEntrada.style.border = "1px solid red";

    setTimeout(() =>{
      textAreaEntrada.style.border = "1px solid transparent";
      textAreaEntrada.value = "";
    },5000);

    borderColor = true;

  } else {

    borderColor = false;

    switch (botonPulsado) {

      case "Encriptar":
        textAreaEntrada.style.border = "1px solid transparent";
        imagenSuper.classList.add("ocultar");
        document.querySelector(".aviso").classList.add("opacity");
        document.querySelector("#boton-copiar").classList.remove("ocultar");
        encriptar(texto);
        textAreaEntrada.value = "";
        break;

      case "Desencriptar":
        textAreaEntrada.style.border = "1px solid transparent";
        imagenSuper.classList.add("ocultar");
        document.querySelector(".aviso").classList.add("opacity");
        document.querySelector("#boton-copiar").classList.remove("ocultar");
        desencriptar(texto);
        textAreaEntrada.value = "";
        break;
    }
  }

  //return boleano;
}

function encriptar(texto) {// #### Encriptado del texto introducido. ####
  const palabras = ["ai", "enter", "imes", "ober", "ufat"];
  const silabas = ["a", "e", "i", "o", "u"];
  let textoFinal = [];
  let textoEditado = [];
  let palabrasIndex = false;

  //Buscando palabras de la constante 'palabras' en el argumento 'texto', si existen guarda el valor 'true'
  // de lo contrario guarda 'false'.

  for (let i = 0; i < palabras.length; i++) {
    if (texto.includes(palabras[i])) {
      palabrasIndex = true;
      break;
    } else {
      palabrasIndex = false;
    }
  }

  //Verifica si existen palabras de la constante 'palabras' en el argumento 'texto',
  //si no existe ninguna palabra procede a encriptar el texto, de lo contrario muestra un error en la pantalla.

  if (!palabrasIndex) {
    for (let i = 0; i < texto.length; i++) {
      if (silabas.includes(texto[i])) {
        switch (texto[i]) {
          case silabas[0]:
            textoEditado.push(texto[i].replace(silabas[0], palabras[0]));
            break;
          case silabas[1]:
            textoEditado.push(texto[i].replace(silabas[1], palabras[1]));
            break;
          case silabas[2]:
            textoEditado.push(texto[i].replace(silabas[2], palabras[2]));
            break;
          case silabas[3]:
            textoEditado.push(texto[i].replace(silabas[3], palabras[3]));
            break;
          case silabas[4]:
            textoEditado.push(texto[i].replace(silabas[4], palabras[4]));
            break;
        }
      } else {
        textoEditado.push(texto[i]);
      }

      textoFinal = textoEditado.join(", ").replace(/, /g, "");

      textAreaSalida.value = textoFinal;
    }
  } else {
    crearComponente("El texto introducido fue encriptado anteriormente");
  }
}

function desencriptar(texto) {// #### Desencriptado del texto introducido. ####
  const palabras = ["ai", "enter", "imes", "ober", "ufat"];
  const silabas = ["a", "e", "i", "o", "u"];
  let textoEditado;
  let palabrasIndex = false;

  //Buscando palabras de la constante 'palabras' en el argumento 'texto', si existen guarda el valor 'true'
  // de lo contrario guarda 'false'.

  for (let i = 0; i < palabras.length; i++) {
    if (texto.includes(palabras[i])) {
      palabrasIndex = true;
      break;
    } else {
      palabrasIndex = false;
    }
  }

  // Si existen palabras de la constante 'palabras' en el argumento 'texto' procede a desencriptar de lo contrario
  // muestra un error en la pantalla.

  if (palabrasIndex) {
    for (let i = 0; i < palabras.length; i++) {
      if (texto.search(palabras[0]) != -1) {
        textoEditado = texto.replace(new RegExp(palabras[0], "g"), silabas[0]);
      } else if (texto.search(palabras[1]) != -1) {
        textoEditado = texto.replace(new RegExp(palabras[1], "g"), silabas[1]);
      } else if (texto.search(palabras[2]) != -1) {
        textoEditado = texto.replace(new RegExp(palabras[2], "g"), silabas[2]);
      } else if (texto.search(palabras[3]) != -1) {
        textoEditado = texto.replace(new RegExp(palabras[3], "g"), silabas[3]);
      } else if (texto.search(palabras[4]) != -1) {
        textoEditado = texto.replace(new RegExp(palabras[4], "g"), silabas[4]);
      }
      texto = textoEditado;
    }

    textAreaSalida.value = textoEditado;
  } else {
    crearComponente("El texto introducido no puede ser desencriptado!");
  }
}

function crearComponente(texto){// #### Crea un mensaje emergente en la pantalla. ####
  var componente = document.createElement("div");
  componente.textContent = texto;
  componente.style.position = "fixed";
  componente.style.top = "-50px";
  componente.style.left = "50%";
  componente.style.transform = "translateX(-50%)";
  componente.style.backgroundColor = "#B3B3B3";
  componente.style.padding = "15px";
  componente.style.borderRadius = "5px";
  
  document.body.appendChild(componente);

  setTimeout(() => {
    componente.style.transition = "all 200ms";
    componente.style.top = "20px";
    //document.body.removeChild(componente);
  }, 500);

  setTimeout(() => {
    document.body.removeChild(componente);
  }, 3500);
}

function copiar(texto) {// #### Copiar al portapapeles. ####
  if (!texto == "") {
    navigator.clipboard.writeText(texto)
      .then(() => {
        crearComponente("Texto copiado con exito.");
      })
      .catch(() => {
        crearComponente("Error, el texto no pudo ser copiado.");
      });
  }
}

checkbox.addEventListener("change", () => {// #### Evento de cambio de modo oscuro y claro. ####
  cambioModo();
});

botonEncriptar.addEventListener("click", () => {// #### Evento de encriptación de texto. ####

  botonPulsado = "Encriptar";
  verificarTexto(textAreaEntrada.value);
  //encriptar(textAreaEntrada.value);

});

botonDesencriptar.addEventListener("click", () => {// #### Evento de Desencriptación de texto. ####

  botonPulsado = "Desencriptar";
  verificarTexto(textAreaEntrada.value);

});

botonCopiar.addEventListener("click", () => {// #### Evento de copiado al portapapeles. ####

  copiar(textAreaSalida.value);

});
