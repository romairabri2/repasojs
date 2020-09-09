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

/*for(var i = 0; i<= 2020; i++){
    //bloque de instrucciones
    datos.innerHTML += `<h2>Estamos en el año: ${i}</h2>`;
}*/

function MuestraMiNombre(nombre, altura){
    var misdatos =  `
    <h1>Soy tu caja de datos =)</h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h3>Mido: ${altura} cm</h3>
    `;
    return misdatos;
}

function imprimir(){
    var datos = document.getElementById("datos");
    datos.innerHTML = MuestraMiNombre("Victor Robles Web 111", 190);
}

imprimir();


var nombres = ["Victor", "Antonio", "Joaquin"];

document.write(`<h1>Listado de nombres</h1>`);

/*for(var i=0; i < nombres.length; i++) {
    document.write(nombres[i] + '<br>');
}*/

nombres.forEach((nombre) => {
    document.write(nombre + '<br>');
});

var coche = {
    modelo: 'Mercedes clase A',
    maxima: 500,
    antiguedad: 2020,
    mostrarDatos(){
        console.log(this.modelo, this.maxima, this.antiguedad);
    },
    propiedad1: "valor aleatorio"
};

document.write("<h1>"+ coche.antiguedad + "</h1>");
coche.mostrarDatos();
console.log(coche);

var saludar = new Promise((resolve, reject) => {
    setTimeout(() => {
        let saludo = "Hola muy buenas a todos chavales!!!";
        if(saludo){
            resolve(saludo);
        } else {
            reject("No hay saludo disponible");
        }
    }, 2000);
});

saludar.then(resultado =>{
    alert(resultado);
})
.catch(err =>{
    alert(err);
});