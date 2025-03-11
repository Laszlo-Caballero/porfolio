import { Env } from "@/Config/env";
import { ExperienceResponsive, Responsive } from "@/Interfaces/types";
import axios from "axios";

export async function GetExperience(): Promise<
  Responsive<ExperienceResponsive[]>
> {
  const res = await axios.get(`${Env.API_URL}/experience`);
  return res.data;
}
