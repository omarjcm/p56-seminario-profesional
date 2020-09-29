const express = require('express')
const carrera = require('../components/carrera/network')
const docente = require('../components/docente/network')

const routes = function(server) {
    server.use('/carrera', carrera)
    server.use('/docente', docente)
}

module.exports = routes