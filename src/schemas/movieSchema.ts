import joi from "joi";

export const movieSchemma = joi.object({
  name: joi.string().min(2).required(),
  genre: joi.string().required(),
  platform: joi.string().required(),
  status: joi.boolean().default(false),
  comment: joi.string(),
});
