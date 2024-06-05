import Joi from "joi";

export const addressValidation = Joi.object({
  country: Joi.string().required(),
  city: Joi.string().required(),
  state: Joi.string().required(),
  zipCode: Joi.string().required(),
  latitude: Joi.number().required(),
  longitude: Joi.number().required(),
});

/**
 * country: address.country(),
      city: address.city(),
      state: address.state(),
      zipCode: address.zipCode(),
      latitude: address.latitude(),
      longitude: address.longitude(),
 */

/**
 * {"country":"Romania","city":"Lehnerhaven","state":"Vermont","zipCode":"72207","latitude":-10.6266,"longitude":134.8208}
 */
