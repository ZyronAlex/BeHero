const connection = require('../database/connection');
module.exports = {
    async index (request, response){
        const ongs = await connection('ong').select('*');
        
        return response.json(ongs);
    },
};