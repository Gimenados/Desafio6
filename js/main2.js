// PUNTO 5
//Function del tercer punto 

const firstList = document.getElementById("nombre1").children; //Llamo a las 2 listas
const list2 = document.getElementById("nombre2").children;

function processNameList(HTMLList, integrante) { // Tomo como entrada una listaHTMLList y una etiqueta para el integrante
  let fullName = "";
  let contadorCampo = 1;

  for (let i = 0; i < HTMLList.length; i++) { //Bucle for para las dos listas
      const element = HTMLList[i];
      if (element.tagName === "DD" && element.innerText) { //Condicion los elementos junior de la lista "dd" y lo concateno el espacio con concat(" ")
          if (fullName) {
              fullName = fullName.concat(" ");
          }
          if (contadorCampo <= 2) { // Contador si es menor a 2 concatena minuscula
              fullName = fullName.concat(`${element.innerText}`);
          } else { //De lo contrario mayuscula
              fullName = fullName.concat(`${element.innerText.toUpperCase()}`);
          }
          contadorCampo++;
      }
  }

  return `${integrante}: "${fullName.trim()}"`; //Termino la function 
}

function imprimirLineaDeGuiones() {
  let dashLine = "----";
  return dashLine;
}

console.log(`${imprimirLineaDeGuiones()} \n${processNameList(firstList, "Integrante 1")} \n${processNameList(list2, "Integrante 2")}\n${imprimirLineaDeGuiones()}`);







