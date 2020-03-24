const express = require('express');
const routes  = express.Router();

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

routes.get('/',(request,response)=> {
    return response.json({
        evento: 'Semana OminiStack',
        aluno: 'Alex Fraga'
    });
});

//Session Routes
routes.post('/session',SessionController.create);

// Ongs Routes
routes.get('/ong',OngController.index);
routes.post('/ong',OngController.create);

// Incidents Routes
routes.get('/incident',IncidentController.index);
routes.post('/incident',IncidentController.create);
routes.delete('/incident/:id',IncidentController.delete);

// Profile Routes
routes.get('/profile',ProfileController.index);

module.exports = routes;