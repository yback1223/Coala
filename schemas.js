const Joi = require('joi');

module.exports.coalaSchema = Joi.object({
    coala: Joi.object({
        coin: Joi.string().required().min(0),
        algorithm: Joi.string().required(),
        price: Joi.number().required().min(0),
    }).required()
});

