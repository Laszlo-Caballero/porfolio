import mongoose, { Schema } from "mongoose";

export const ExperienceSchema = new Schema({
  experienceId: String,
  title: String,
  description: String,
  company: String,
  urlImage: String,
  time: String,
});

export const Experience =
  mongoose.models.Experiences ||
  mongoose.model("Experiences", ExperienceSchema);
