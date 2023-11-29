//PUNTO 1 

console.log(document.getElementById("Title").innerText) //Muestra solo el texto de mi DOM

//PUNTO 3

const firstList = document.getElementById("nombre1").children; //Children hijos

function createFullName(HTMLList) {
    let fullName = ""; // Variable para almacenar el nombre completo
    let contadorCampo = 1; //Variable para el contador del ciclo 

    for (let i = 0; i < HTMLList.length; i++) { //El contenido de la lista del primer nombre
        const element = HTMLList[i];
        if (element.tagName === "DD") { //Condicion solo las etiquetas dd
        if (element.innerText) {
          if (fullName) {
            fullName = fullName.concat(" ") //Para darle un espacio entre nombre
          }
          if (contadorCampo <= 2) { //Si es menor o igual a posicion 2 la letras en minuscula
            fullName = fullName.concat(`${element.innerText}`);
          } else { //De lo contrario en mayuscula 
            fullName = fullName.concat(`${element.innerText.toUpperCase()}`);
          }
        }  
    contadorCampo++; 
      }
  }
    return `Integrante 1: "${fullName.trim()}"`;
}

const list2 = document.getElementById("nombre2").children;

function showList(list2) { //function para el segundo nombre
    let string = "";
    lastname2 = 1;
    for (let index = 0; index < list2.length; index++) {
        const element2 = list2[index];
        if (element2.tagName === "DD") {
           if (element2.innerText) {
            if (string) {
              string = string.concat(" ")
            }
            if (lastname2 <= 2) {
              string = string.concat(`${element2.innerText}`);
            } else {
              string = string.concat(`${element2.innerText.toUpperCase()}`)
            }
           }
     lastname2++;
          }
        }
    return `Integrante 2: "${string.trim()}"` //Trim elimina los espacios de ambos extremos del string
}

function imprimirLineaDeGuiones() {  //Creo una function para los guiones. Asi de esta forma en el console log solo llamo a las funciones 
  let dashLine = "----"; //Le doy valor a la variable 
return dashLine; // Cierro la function de guiones
}

//                                        |_> \n Para salto de linea        
console.log(`${imprimirLineaDeGuiones()} \n${createFullName(firstList)} \n${showList(list2)}\n${imprimirLineaDeGuiones()}`);
//                |_> Se le llama a la function con nombre()    


//PUNTO 4

const nombre1 = createFullName(document.getElementById("nombre1").children); //Vinculo con mi lista nombre 1 y nombre 2
const nombre2 = showList(document.getElementById("nombre2").children);

const palabrasNombre1 = nombre1.split(" "); //Split divide el texto en espacios tambien podria poner un concat.(" ") y seria lo mismo
const palabrasNombre2 = nombre2.split(" ");

const colorResaltadoRegex = /^(red|blue|green|yellow|purple|orange)$/i; // Para hacer coincidir cadenas que representan ciertos colores específicos.

if (palabrasNombre1.some(palabra => palabrasNombre2.includes(palabra)) || palabrasNombre2.some(palabra => palabrasNombre1.includes(palabra))) { //Para verificar si al menos una palabra está presente en ambas listas 
 
  let colorResaltado = prompt("Hubo coincidencias. Ingresa un color para resaltar los nombres (ejemplo: red, orange, green):"); //Llamamos a un prompt

  if (colorResaltado && colorResaltadoRegex.test(colorResaltado)) { //Primera condicion si el color ingresado en el prompt y la variable asignada de color coinciden 
    const elementoNombre1 = document.getElementById("nombre1");
    const elementoNombre2 = document.getElementById("nombre2");

    // Obtener los elementos dd dentro de los elementos dt
    const ddNombre1 = Array.from(elementoNombre1.querySelectorAll("dd"));
    const ddNombre2 = Array.from(elementoNombre2.querySelectorAll("dd"));

    // Variable para verificar si hubo coincidencias
    let huboCoincidencias = false;

    // Comparar y cambiar el color solo de los elementos iguales
    for (let i = 0; i < ddNombre1.length && i < ddNombre2.length; i++) {  //Bucle for para los elementos iguales
      const nombre1Actual = ddNombre1[i].textContent.trim();
      const nombre2Actual = ddNombre2[i].textContent.trim();

      if (nombre1Actual === nombre2Actual) { //Si los elementos son iguales (abajo huboCoincidencias=true;)
        ddNombre1[i].style.color = colorResaltado;
        ddNombre2[i].style.color = colorResaltado;
        huboCoincidencias = true;
      }
    }

    // Imprimir el resultado dependiendo el valor
    if (huboCoincidencias) {
      console.log(`¡Sí hubo coincidencias entre los nombres! \nResaltando con el color: ${colorResaltado}`);
    } else {
      console.log("Los nombres no coinciden. Por lo tanto no se le ingresará un color.");
    }
  } else {
    console.log("El color ingresado no es válido.");
  }
  
}

//Para apellidos

// Preguntar al usuario si desea comparar los apellidos
const compararApellidos = confirm("¿Desea comparar los apellidos?");

if (compararApellidos) {
  const apellido1 = document.getElementById("nombre1").querySelector("dd:last-child").textContent.trim();
  const apellido2 = document.getElementById("nombre2").querySelector("dd:last-child").textContent.trim();

  // Realizar la comparación de apellidos
  if (apellido1 === apellido2) {
    // Apellidos iguales, seguir con la comparación de nombres

    if (palabrasNombre1.some(palabra => palabrasNombre2.includes(palabra)) || palabrasNombre2.some(palabra => palabrasNombre1.includes(palabra))) {
      // Resto del código para comparar y resaltar nombres
    } else {
      console.log("Los apellidos coinciden, pero los nombres no.");
    }
  } else {
    console.log("Los apellidos no coinciden.");
  }
} else {
  console.log("No se realizará la comparación de apellidos.");
}

