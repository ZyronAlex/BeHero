const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');
const routes = express.Router();

const OngController = require('./controllers/OngController');
const OngValidator = require('./validators/OngValidator');

const IncidentController = require('./controllers/IncidentController');
const IncidentValidator = require('./validators/IncidentValidator');

const ProfileController = require('./controllers/ProfileController');
const ProfileValidator = require('./validators/ProfileValidator');

const SessionController = require('./controllers/SessionController');
const SessionValidator = require('./validators/SessionValidator');

routes.get('/', (request, response) => {
    return response.json({
        evento: 'Semana OminiStack',
        aluno: 'Alex Fraga'
    });
});

//Session Routes
routes.post('/session', SessionValidator.post, SessionController.create);

// Ongs Routes
routes.get('/ong', OngController.index);
routes.post('/ong', OngValidator.post, OngController.create);

// Incidents Routes
routes.get('/incident', IncidentValidator.get, IncidentController.index);
routes.post('/incident', IncidentValidator.post, IncidentController.create);
routes.delete('/incident/:id', IncidentValidator.delete, IncidentController.delete);

// Profile Routes
routes.get('/profile', ProfileValidator.get, ProfileController.index);

module.exports = routes;