import mongoose, { Schema } from 'mongoose';

const projectsSchema = new Schema({
  projectId: String,
  title: String,
  description: String,
  slug: String,
  urlImage: {
    url: String,
    alt: String,
  },
  githubUrl: String,
  demoUrl: {
    type: String,
    required: false,
  },
  images: [
    {
      url: String,
      alt: String,
    },
  ],
  tecnologies: [String],
  details: {
    role: String,
    time: String,
    team: {
      type: String,
      required: false,
    },
  },
  resume: String,
  objectives: [String],
  learnings: [String],
  outStanding: {
    type: Boolean,
    default: false,
  },
});

const Project = mongoose.models.Proyects || mongoose.model('Proyects', projectsSchema);

export default Project;
