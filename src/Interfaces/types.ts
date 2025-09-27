import { UploadApiErrorResponse, UploadApiResponse } from 'cloudinary';

export interface Responsive<T> {
  message: string;
  body: T;
  status: number;
}
export interface ExperienceResponsive {
  _id: string;
  experienceId: string;
  title: string;
  description: string;
  company: string;
  urlImage: string;
  time: string;
  __v: number;
}
export interface ProyectResponsive {
  urlImage: UrlImage;
  details: Details;
  slug: string;
  _id: string;
  projectId: string;
  title: string;
  description: string;
  githubUrl: string;
  images: Image[];
  tecnologies: string[];
  resume: string;
  objectives: string[];
  learnings: string[];
  outStanding: boolean;
  __v: number;
}

export interface UrlImage {
  url: string;
  alt: string;
}

export interface Details {
  role: string;
  time: string;
}

export interface Image {
  url: string;
  alt: string;
  _id: string;
}
export interface Tecnology {
  urlImage: string;
  name: string;
  _id: string;
}

export interface Tecnologies {
  _id: string;
  urlImage: string;
  altImage: string;
  __v: number;
}

export type CloudinaryResponse = UploadApiResponse | UploadApiErrorResponse;
