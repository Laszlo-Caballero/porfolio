import { Env } from "@/Config/env";
import { ProyectResponsive, Responsive } from "@/Interfaces/types";
import axios from "axios";

export async function GetProyects(): Promise<Responsive<ProyectResponsive[]>> {
  const res = await axios.get(`${Env.API_URL}/proyects`);
  return res.data;
}
