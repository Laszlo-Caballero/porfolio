import { Responsive, Tecnologies } from "@/Interfaces/types";
import connectMongoDB from "@/lib/mongo";
import Tecnologie from "@/schemas/tecnologie/tecnologie.schema";

export async function GetAllTecnologies(): Promise<Responsive<Tecnologies[]>> {
  await connectMongoDB();

  const tecnologies = await Tecnologie.find();

  return {
    message: "Tecnologies retrieved successfully",
    body: tecnologies.map((tecnology) => ({
      _id: tecnology._id.toString(),
      urlImage: tecnology.urlImage,
      altImage: tecnology.altImage,
      __v: tecnology.__v,
    })),
    status: 200,
  };
}
