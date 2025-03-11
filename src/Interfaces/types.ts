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
