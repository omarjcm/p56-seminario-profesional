var docente = {
    nombre: 'Guillermo',
    apellido: 'Pizarro',
}

var docente2 = {
    nombre: 'Dario',
    apellido: 'Huilcapi',
}

// Asignación por paso de valor
var otroDocente = {
    ... docente
}

console.log( docente == docente2 )
// Debido a que son objetos diferentes (tienen diferente dirección de memoria)
console.log( docente == otroDocente )

console.log( otroDocente.nombre )

// Esta asignación es por referencia
docente3 = otroDocente
otroDocente.nombre = 'Luis'

// Debido a que es el mismo objeto (tienen la misma dirección en memoria)
console.log( docente3 == otroDocente )
console.log( docente3 )
console.log( docente )