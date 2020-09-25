// Especificación de objetos.
var objeto1 = {
    nombre: 'Luis',
    apellido: 'Armijos',
    altura: 180,
    cantidadLibros: 20,
}

var objeto2 = {
    nombre: 'Shirley',
    apellido: 'Coque',
    altura: 160,
    cantidadLibros: 200,
}

var objeto3 = {
    nombre: 'Javier',
    apellido: 'Ortiz',
    altura: 170,
    cantidadLibros: 50,
}

var objeto4 = {
    nombre: 'Guillermo',
    apellido: 'Pizarro',
    altura: 170,
    cantidadLibros: 50,
}

var objeto5 = {
    nombre: 'Galo',
    apellido: 'Valverde',
    altura: 160,
    cantidadLibros: 60,
}

var personas = [ objeto1, objeto2, objeto3, objeto4, objeto5 ]

// Recorrer un arreglo de objetos
for (persona of personas) {
    console.log( `${persona.nombre} ${persona.apellido}` )
}

console.log('\n')

for (var i=0; i<personas.length; i++) {
    console.log( `${personas[i].nombre} ${personas[i].apellido}` )
}

// Uso de filtros con arreglos.
const esAlta = (objeto) => objeto.altura >= 1.70
var personasAltas = personas.filter( esAlta )

console.log( personasAltas )
for (persona of personasAltas) {
    console.log( `${persona.nombre} ${persona.apellido}` )
}

// Uso de la funcion map con arreglos

for (persona of personas) {
    persona.altura = persona.altura / 100
}
console.log( personas )

const pasarAlturasMetros = (objeto) => {
    objeto.altura = objeto.altura / 100
    return objeto
}

var otrasPersonas = []

for (persona of personas) {
    otrasPersonas.push( { ... persona } )
}

otrasPersonas.map( pasarAlturasMetros )
console.log( personas )
console.log( otrasPersonas )

// var personasCm = personas.map( function (objeto) {
//     objeto.altura = objeto.altura * 100
//     return objeto
// } )
// console.log( personasCm )

// Uso de la función reduce en arreglos
var sum = 0
for (persona of personas) {
    sum += persona.cantidadLibros
}
console.log( `La cantidad de libros en total es ${sum}` )


const contabilizarLibros = (acum, { cantidadLibros }) => acum + cantidadLibros
var totalLibros = personas.reduce( contabilizarLibros, 0)

console.log( `La cantidad de libros en total es ${totalLibros}` )
