const connection = require('../database/connection');
module.exports = {
    async create (request, response){
        const {id} = request.body;
        const incidents = await connection('incident').where('ong_id', ong_id).select('*');        
        return response.json(incidents);
    },
};