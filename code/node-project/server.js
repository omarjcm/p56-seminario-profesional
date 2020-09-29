const express = require('express')
const bodyParser = require('body-parser')
const response = require('./network/response')

const router = require('./network/routes')

var app = express()
app.use( bodyParser.json() )
app.use( bodyParser.urlencoded( {extended:false} ) )
router( app )


app.use( '/', express.static('public') )

app.listen( 5000 )
console.log( 'La aplicación está escuchando en http://localhost:5000' )