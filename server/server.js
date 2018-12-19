//las peticiones GET se utilizan mucho cuando se requiere actualizar data
//las peticiones POST se utiliza para crear nuevos registros
//las peticiones PUT se utilizan para actualizar los registros
//las peticiones DELETE se usan para eliminar registros pero actualmente los registros...
//...ya no se eliminan, en cambio, se le cambian los estados para que ya no estén disponibles

require('./config/config.js');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 

//para enviar información en formato JSON se hace el comando res.json("...")

app.get('/usuario', function (req, res) {
  res.json('get Usuario');
});

app.post('/usuario', function (req, res) {
    
    let body = req.body;

    if(body.nombre === undefined){
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        });
    }else{
        res.json({
            persona: body
        })
        
    }
    
    
    
});

//para actualizar un registro desde el URL se hace con el id, el cuál se recibe por parámetro
app.put('/usuario/:id', function (req, res) {
    //para obtener el id...
    let id = req.params.id;
    
    res.json({
        id: id,

    })
});

app.delete('/usuario', function (req, res) {
    res.json('delete usuario')
});

app.listen(process.env.PORT, () => {
    console.log('escuchando en el puerto: ', process.env.PORT);
});