import mongoose, { Schema } from "mongoose";

const tecnologieSchema = new Schema({
  urlImage: String,
  altImage: String,
});

const Tecnologie =
  mongoose.models.Tecnologies ||
  mongoose.model("Tecnologies", tecnologieSchema);

export default Tecnologie;
