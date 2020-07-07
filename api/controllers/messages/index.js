const express = require('express');
const router = express.Router();
//referencia al servicio

const messagesModule = require('./../../services/messages');

router.route('/')
    .get((req, res)=>{
        //llamado a leer mensajes guardados
        res.status(200).send(messagesModule.loadMessages());
    })
    .post((req, res)=>{
        //crear el objeto que se va a guardar
        const message = {
            id: messagesModule.arrayLenght(),
            msg: req.body.msg,
        };
        //llamado a guardar mensajes
        messagesModule.newMessage(message);
        res.status(200).send({mensaje:'El Mensaje ha sido enviado'});
    });

router.route('/:id')
    .get((req, res)=>{
        res.send(`Página del message ${req.params.id}`);
    })
    .delete((req, res)=>{
        res.send(`Eliminar message ${req.params.id}`);
    })
    .put((req, res)=>{
        res.send(`Actualizar el message ${req.params.id}`);
    });

module.exports = router;