let persona = {
    nombre: 'Alejandro',
    apellido: 'Vega',
    peso: 150, 
}

const INCREMENTAR_PESO = 3
const DECREMENTAR_PESO = 2

const aumentarPeso = ( objeto ) => objeto.peso += INCREMENTAR_PESO
const disminuyePeso = ( objeto ) => objeto.peso -= DECREMENTAR_PESO

const comeMucho = () => Math.random() < 0.7
const realizaDeporte = () => Math.random() < 0.2

const META = persona.peso - 10

console.log( `Al inicio del año ${persona.nombre} pesa ${persona.peso}.` )

while( persona.peso > META ) {
    if (comeMucho()) {
        console.log('Aumenta el peso.')
        aumentarPeso( persona )
    }
    if (realizaDeporte()) {
        console.log('Disminuye el peso.')
        disminuyePeso( persona )
    }
}

console.log( `Al final del año ${persona.nombre} pesa ${persona.peso}.` )
