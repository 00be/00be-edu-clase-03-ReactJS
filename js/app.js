var nombre = prompt("Introduce tu nombre:")

let myApp = document.getElementById("dom");

alert (myApp.innerHTML);

myApp.innerHTML = "Bienvenido a mi biografia " + nombre +"</br></br>" ;