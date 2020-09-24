var docente1 = {
    nombre: 'Guillermo',
    apellido: 'Pizarro',
    afiliacion: 'Universidad Politécnica Salesiana',
    correo_electronico: 'gpizarro@ups.edu.ec',
}

var docente2 = {
    nombre: 'Juan',
    apellido: 'Andrade',
    afiliacion: 'Universidad Politécnica Salesiana',
    correo_electronico: 'jandrade@ups.edu.ec',
}

function imprimirNombreMayuscula(objeto) {
    var { nombre } = objeto
    console.log( `${nombre.toUpperCase()} ${objeto.apellido}` )
}

function imprimirNombreMinuscula(objeto) {
    console.log( `${objeto.nombre.toLowerCase()} ${objeto.apellido}` )
}

function imprimirApellidoMayuscula( { apellido } ) {
    console.log( `${apellido.toUpperCase()}` )
}


imprimirNombreMayuscula( docente1 )
imprimirNombreMinuscula( docente1 )
imprimirApellidoMayuscula( docente2 )