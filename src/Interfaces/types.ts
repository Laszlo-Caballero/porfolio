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
  detail: string;
  details: Details;
  keywords: string[];
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
  arquitecture: Arquitecture[];
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
  status: string;
  team?: string;
}

export interface Arquitecture {
  title: string;
  badges: string[];
  detail: KeyValue[];
  colSpan: number;
}

export interface KeyValue {
  key: string;
  value: string;
}

export interface Image {
  url: string;
  alt: string;
  _id: string;
  colSpan: number;
  rowSpan: number;
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
