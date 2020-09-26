function hola(nombre) {
    return new Promise( (resolve, reject) => {
        setTimeout( function() {
            console.log( `Hola soy ${nombre}.` )
            resolve( nombre )
        }, 1000 )
    } )
}

function hablar( nombre ) {
    return new Promise( (resolve, reject) => {
        setTimeout( function() {
            console.log( 'Bla bla bla bla...' )
            resolve( nombre )
        }, 1000 )
    } )
}

function adios(nombre) {
    return new Promise( (resolve, reject) => {
        setTimeout( function() {
            console.log( `Adiós ${nombre}.` )
            resolve( )
        }, 1000 )
    } )
}

console.log('Inicializando conversación...')
hola('Guillermo')
    .then( ( data ) => hablar( data ) )
    .then( ( data ) => hablar( data ) )
    .then( ( data ) => hablar( data ) )
    .then( ( data ) => hablar( data ) )
    .then( ( data ) => adios( data ) )
    .catch( (error) => console.error( error ) )