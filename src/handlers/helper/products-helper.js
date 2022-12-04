const Joi = require('joi');

const checkIdLength = (id) => {
  const MIN_CHAR = 24;
  return id.length >= MIN_CHAR;
};

const checkProductSchema = Joi.object({
  category: Joi.string().required(),
  name: Joi.string().min(2).required(),
  brand: Joi.string().required(),
  price: Joi.number().integer().required(),
  features: Joi.string().required(),
  source: Joi.string().required(),
  insertedAt: Joi.string(),
  updatedAt: Joi.string().required(),
});

const checkUserSchema = Joi.object({
  id: Joi.string().min(24).required(),
  username: Joi.string().required(),
  name: Joi.string().required(),
  email: Joi.string().required(),
});

module.exports = {
  checkIdLength,
  checkProductSchema,
  checkUserSchema,
};