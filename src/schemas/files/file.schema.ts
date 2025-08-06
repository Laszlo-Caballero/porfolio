import mongoose, { Schema } from "mongoose";

const fileSchema = new Schema({
  name: String,
  url: String,
  type: String,
});

const File = mongoose.models.File || mongoose.model("File", fileSchema);

export default File;
