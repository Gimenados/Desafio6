// PUNTO 5
//Function del tercer punto 

const firstList = document.getElementById("nombre1").children;
const list2 = document.getElementById("nombre2").children;

function processNameList(HTMLList, integrante) {
  let fullName = "";
  let contadorCampo = 1;

  for (let i = 0; i < HTMLList.length; i++) {
      const element = HTMLList[i];
      if (element.tagName === "DD" && element.innerText) {
          if (fullName) {
              fullName = fullName.concat(" ");
          }
          if (contadorCampo <= 2) {
              fullName = fullName.concat(`${element.innerText}`);
          } else {
              fullName = fullName.concat(`${element.innerText.toUpperCase()}`);
          }
          contadorCampo++;
      }
  }

  return `${integrante}: "${fullName.trim()}"`;
}

function imprimirLineaDeGuiones() {
  let dashLine = "----";
  return dashLine;
}

console.log(`${imprimirLineaDeGuiones()} \n${processNameList(firstList, "Integrante 1")} \n${processNameList(list2, "Integrante 2")}\n${imprimirLineaDeGuiones()}`);







