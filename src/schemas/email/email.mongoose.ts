import mongoose, { Schema } from 'mongoose';

export const EmailSchemaMongoose = new Schema({
  name: String,
  phone: String,
  email: String,
  message: String,
});

export const Email = mongoose.models.Emails || mongoose.model('Emails', EmailSchemaMongoose);
