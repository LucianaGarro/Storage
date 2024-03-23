//Storage:
//Nos permite guardar datos de manera local en el navegador, generar persistencia datos.
//Generar persistencia de datos se refiere al proceso de:
// almacenar datos de manera permanente para que:
//puedan ser recuperados y utilizados posteriormente, 
//incluso después de que la aplicación o el sistema que los creó haya sido cerrado o reiniciado.
//El navegador nos va a ofrecer dos formas diferentes de guardar datos en el storage.
//1) localStorage: almacena los datos de forma INDEFINIDA hasta que el ususario los borre de forma manual.
//2) sessionStorage: almacena los datos hasta que el usuario cierre el navegador.

//1) Vamos a trabajar con localStorage:
//Para guardar datos en el local tenemos que usar un método llamado setItem().
//Esto lo hacemos llamando a un objeto global llamado localStorage
//setItem(): va a recibir DOS parámetros: el nombres de la clave y el valor a guardar.

//Ejemplo A: un saludo

localStorage.setItem("Saludo", "Hola Mundo");

//Ejemplo B: un número
localStorage.setItem("Número", 1234);

//Ejemplo C: booleano

localStorage.setItem("Boolean", true);

//Para recuperar los datos almacenados, utilizamos el método getItem () en una variable.

let almacenamiento = localStorage.getItem("Saludo");
console.log(almacenamiento);

//2) sessionStorage:
//funcionamiento similar a localStorage
//guardamos datos con el método de setItem ()

sessionStorage.setItem("Nombre", "Juan");
let nombre = sessionStorage.getItem("Nombre");
console.log(nombre);

//ELIMINAMOS DATOS DEL STORAGE:
//PARA ELIMINAR DATOS DE LOCALSTORAGE, UTILIZAMOS EL MÉTODO removeItem()

localStorage.removeItem("Saludo");
localStorage.clear();

// Almacenar objetos en el storage
// tener en cuenta que todo lo que se almacena en storage se hace en formato de string.
//Si queremos almacenar un objeto, tenemos que pasarlo a string.
//JSON: javascript obtect notation. 
//Es un formato de texto ligero para el intercambio de datos.
//Json es un string con un formato especial.

//Creamos un objeto para pasarlo a Json:

const luciana = {
    nombre: "Luciana",
    apellido: "Garro",
    edad: 31
};

//Utilizamos el método JSON stringify () 
//"stringify" se refiere específicamente a la acción de:
// convertir un objeto JavaScript en una cadena de caracteres JSON.

const lucianaJson = JSON.stringify(luciana);
console.log(lucianaJson);

//ahora puedo almacenar el objeto que pasó a json en localStorage

localStorage.setItem("luciana", lucianaJson);

//Si quiero recuperar un JSON del localStorage y 
//convertirlo a objeto nuevamente tengo que utilizar un método JSON.parse()

const personaJson = localStorage.getItem("luciana");
const persona = JSON.parse(personaJson);
console.log(persona);

//Recordemos:
//document es el objeto que representa al documento HTML
//body es el elemento que representa al body del documento HTML
//classlist es una propiedad que nos devuelve una lista de las clases del elemento.

//Ejemplo utilizando lo que es localStorage para cambiar el modo dark o light

//1) crear un botón para cambiar el modo de la página
//2) almacenar el modo en el localStorage
//3) Al recargar la página, recuperar el modo del localStorage
//4) cambiar el modo de la página
//toggle: es un método que nos permite agregar o eliminar una clase del elemento.

const botonDark = document.getElementById("botonFondo");

botonDark.addEventListener("click", ()=>{
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        localStorage.setItem("modo", "dark")
    } else{
        localStorage.setItem("modo", "light")
    }
});

//recuperamos el modo del localStorage:

const modo = localStorage.getItem("modo");
    if (modo === "dark"){
        document.body.classList.add("dark");
    }else{
        document.body.classList.remove("dark");
    }




