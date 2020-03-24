const express = require('express');
const routes  = express.Router();

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');

routes.get('/',(request,response)=> {
    return response.json({
        evento: 'Semana OminiStack',
        aluno: 'Alex Fraga'
    });
});

// Ongs Routes
routes.get('/ong',OngController.index);
routes.post('/ong',OngController.create);

// Incidents Routes
routes.get('/incident',IncidentController.index);
routes.post('/incident',IncidentController.create);
routes.delete('/incident/:id',IncidentController.delete);

module.exports = routes;