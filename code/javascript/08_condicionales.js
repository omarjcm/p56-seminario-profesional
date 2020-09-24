var persona = {
    nombre: 'Luis',
    apellido: 'Rodriguez',
    edad: 25,
    universidad: 'Universidad Politécnica Salesiana',
    correoElectronico: 'lrodriguez@est.ups.edu.ec',
    ingeniero: true,
    master: false,
    doctor: false
}

function imprimirPersona( objeto ) {
    console.log( `${objeto.nombre} ${objeto.apellido}` )
    console.log( `Edad: ${objeto.edad} años.` )
    console.log( `Universidad: ${objeto.universidad}` )
    console.log( `Correo electrónico: ${objeto.correoElectronico}` )
    if (objeto.ingeniero) {
        console.log( `Es Ingeniero.` )
    }
    if (objeto.master) {
        console.log( `Es Magíster.` )
    }
    if (objeto.doctor) {
        console.log( `Es Doctor.` )
    }
}

// SWITCH
opcion = 2

switch(opcion) {
    case 1: 
        console.log('Caso 1')
        break
    case 2:
        console.log('Caso 2')
        break
}

imprimirPersona( persona )