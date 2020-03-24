const connection = require('../database/connection');
module.exports = {
    async index (request, response){
        const {page = 1} = request.query;

        const [count] = await connection('incident').count();
        const incidents = await connection('incident')
        .limit(5)
        .offset((page-1) * 5)
        .select('*');
        
        response.header('X-Total-Count',count['count(*)']);
        return response.json(incidents);
    },
    
    async create(request, response){
        const ong_id = request.headers.authorization;
        const {title, description, value} = request.body;

        const [id] = await connection('incident').insert({
            title, 
            description, 
            value, 
            ong_id
        });

        return response.json({id});
    },

    async delete(request, response){
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const incident = await connection('incident')
        .where('id', id)
        .select('ong_id')
        .first();


        if(!incident)
            if(incident.ong_id !== ong_id){
                return response.status(401).json({error:'Operation not permitted.'});
            }
            else{
                await connection('incident').where('id',id).delete();
                return response.status(204).send();
            }
        else 
            return response.status(400).json({error:'No Incident found with this ID: '+id+'.'});
    }
};