import mongoose, { Schema } from 'mongoose';

const projectsSchema = new Schema({
  projectId: String,
  title: String,
  detail: String,
  description: String,
  slug: String,
  keywords: [String],
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
      colSpan: {
        type: Number,
        default: 1,
      },
      rowSpan: {
        type: Number,
        default: 1,
      },
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
    status: String,
  },
  resume: String,
  objectives: [String],
  learnings: [String],
  outStanding: {
    type: Boolean,
    default: false,
  },
  arquitecture: [
    {
      title: String,
      badges: {
        type: [String],
        default: [],
      },
      detail: {
        type: [
          {
            key: String,
            value: String,
          },
        ],
        default: [],
      },
      colSpan: {
        type: Number,
        default: 1,
      },
    },
  ],
});

const Project = mongoose.models.Proyects || mongoose.model('Proyects', projectsSchema);

export default Project;
