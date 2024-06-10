import mongoose from "mongoose";

const countrySchema = new mongoose.Schema(
  {
    country: {
      type: String,
      trim: true,
      required: true,
    },
    city: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    state: {
      type: String,
      trim: true,
      required: true,
    },
    zipCode: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    latitude: {
      type: Number,
      trim: true,
      required: true,
      unique: true,
    },
    longitude: {
      type: Number,
      required: true,
      trim: true,
      unique: true,
    },
  },
  { timestamps: true }
);

export { countrySchema };

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
