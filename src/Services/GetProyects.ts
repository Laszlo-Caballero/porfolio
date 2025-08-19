import { ProyectResponsive, Responsive } from "@/Interfaces/types";
import connectMongoDB from "@/lib/mongo";
import Project from "@/schemas/projects/project.schema";

export async function GetProyects(): Promise<Responsive<ProyectResponsive[]>> {
  await connectMongoDB();
  const data = await Project.find();

  const parseData = data.map((item) => {
    return {
      ...item.toObject(),
      _id: item._id.toString(),
    };
  }) as ProyectResponsive[];

  console.log("Proyects", parseData);

  return {
    body: parseData,
    message: "All experiences",
    status: 200,
  };
}
