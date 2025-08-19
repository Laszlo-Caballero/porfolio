import mongoose, { Schema } from "mongoose";

const projectsSchema = new Schema({
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
  mongoose.models.Proyects || mongoose.model("Proyects", projectsSchema);

export default Project;
