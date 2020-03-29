const {celebrate, Segments, Joi} =  require('celebrate');
module.exports = {    
    post() {
        return celebrate({
            [Segments.PARAMS]: Joi.object().keys({
                id: Joi.number().required(),
            })
        })
    }
};