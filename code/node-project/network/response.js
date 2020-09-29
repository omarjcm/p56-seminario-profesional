exports.success = function(req, res, message, status) {
    res.status( status ).send( {
        error: '', 
        body: message 
    } )
}

exports.error = function(req, res, message, status) {
    console.error( `[Error log] - ${message}` )
    
    res.status( status ).send( {
        error: message, 
        body: '' 
    } )
}