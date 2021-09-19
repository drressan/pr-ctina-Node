'use strict';

function Persona(nombre) {
  this.nombre = nombre;
  // this.saluda = function() {
  //   console.log('Soy', this.nombre);
  // }
}

// pongo el método de saludar en el prototipo de las personas
Persona.prototype.saluda = function() {
  console.log('Hola soy', this.nombre);
}

const maria = new Persona('Maria');
const paco = new Persona('Paco');

maria.saluda();
paco.saluda();

// Herencia de persona ---------------------------

function Agente(nombre) {
  // heredar el constructor de Persona
  // llamar a Persona() con mi this
  Persona.call(this, nombre);
}

// heredar las propiedades y métodos de las personas
Agente.prototype = Object.create(Persona.prototype);
Agente.prototype.constructor = Agente; // recomendado

const smith = new Agente('Smith');

smith.saluda();

// Herencia múltiple --------------------------------

// Patrón mixin
function Superheroe() {
  this.vuela = function() {
    console.log(this.nombre, 'vuela');
  }
}

Object.assign(Agente.prototype, new Superheroe());

smith.vuela();
