import mongoose, { mongo, Schema } from "mongoose";

const projectSchema = new Schema({
  projectId: String,
  title: String,
  description: String,
  urlImage: String,
  githubUrl: String,
  tecnologies: [
    {
      urlImage: String,
      name: String,
    },
  ],
});

const Project =
  mongoose.models.Project || mongoose.model("Project", projectSchema);

export default Project;
