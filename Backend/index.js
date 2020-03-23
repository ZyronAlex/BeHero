const express = require('express');

const app = express();

app.get('/',(request,response)=> {
    return response.json({
        evento: 'Semana OminiStack',
        aluno: 'Alex Fraga'
    });
});

app.listen(3333);
