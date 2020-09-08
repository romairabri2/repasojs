var nombre = "Romaira Brito";
var altura = "156";
var concatenacion = nombre + " " + altura;
var datos = document.getElementById("datos");
datos.innerHTML = `<h1>Soy la Caja de datos</h1>
                   <h2>Nombre: ${nombre}</h2>
                   <h2>Mido: ${altura}</h2>
`;

if(altura >= 180){
    datos.innerHTML += `<h1>Eres una persona ALTA</h1>`;
}
else {
    datos.innerHTML += `<h1>Eres una persona BAJA</h1>`;
}