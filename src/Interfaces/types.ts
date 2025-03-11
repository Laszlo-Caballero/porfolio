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
  _id: string;
  proyectId: string;
  title: string;
  description: string;
  urlImage: string;
  tecnologies: Tecnology[];
  githubUrl: string;
  __v: number;
}
export interface Tecnology {
  urlImage: string;
  name: string;
  _id: string;
}
