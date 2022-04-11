import Joi from 'joi';

const validationSchema = {
  create: Joi.object({

    date: Joi.date().required(),
    title: Joi.string().required(),
    description: Joi.string().required(),
    text: Joi.string().required(),
  }),
  getAll: Joi.object({
    date: Joi.date(),
    title: Joi.string(),
    sortByDate: Joi.string().valid('asc', 'desc'),
    sortByTitle: Joi.string().valid('asc', 'desc'),

  }),

  update: Joi.object({
    date: Joi.date().required(),
    title: Joi.string().required(),
    description: Joi.string().required(),
    text: Joi.string().required(),
  }),

};

export default validationSchema;
