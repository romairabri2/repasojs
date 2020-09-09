class newcoche {
    constructor(marca, velocidad, modelo){
        this.marca = marca;
        this.modelo = modelo;
        this.velocidad = velocidad;
    }

    incrementarVelocidad() {
        this.velocidad += 1;
    }

    reducirVelocidad() {
        this.velocidad -= 1;
    }
}

class Autobus extends newcoche{
    constructor(marca, velocidad, modelo){
        super(marca, velocidad, modelo);
        this.altura = 5;
    }

    mostrarAltura(){
        return "La altura del bus es:" + this.altura;
    }
}

var autobus1 = new Autobus('PEGASUS', 200, 2017);
console.log(autobus1.mostrarAltura());

var coche1 = new newcoche('BMW', 200, 2017);
var coche2 = new newcoche('Audi', 100, 2018);
var coche3 = new newcoche('Mercedes', 200, 2017);
var coche4 = new newcoche('Renault', 200, 2017);

console.log(coche1);
coche1.incrementarVelocidad();

console.log(coche1);