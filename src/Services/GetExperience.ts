import { ExperienceResponsive, Responsive } from "@/Interfaces/types";
import connectMongoDB from "@/lib/mongo";
import { Experience } from "@/schemas/experience/experience.schema";

export async function GetExperience(): Promise<
  Responsive<ExperienceResponsive[]>
> {
  await connectMongoDB();

  const data = await Experience.find();

  const parseData = data.map((item) => {
    return {
      ...item.toObject(),
      _id: item._id.toString(),
    };
  }) as ExperienceResponsive[];

  return {
    body: parseData,
    message: "All experiences",
    status: 200,
  };
}
