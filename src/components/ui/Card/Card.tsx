import { Tecnology } from "@/Interfaces/types";
import Image from "next/image";
import { Typography } from "../Typography/Typography";

interface CardProps {
  title?: string;
  description?: string;
  tecnologies?: Tecnology[];
  githubUrl?: string;
  image: string;
}

export default function Card({
  image,
  title,
  description,
  githubUrl,
  tecnologies,
}: CardProps) {
  return (
    <div className="w-full h-full flex flex-col rounded-2xl bg-primary-black-2">
      <Image
        src={image}
        alt="photo proyect"
        className="w-full h-[125px] object-cover object-top rounded-t-2xl"
        width={500}
        height={500}
      />
      <div className="flex flex-col w-full px-[18px] ">
        <Typography variant="p" className="text-white font-medium text-lg mt-2">
          {title}
        </Typography>
        <Typography variant="p" className="text-white font-medium text-sm mt-2">
          {description}
        </Typography>
        <div className="flex flex-wrap gap-x-2 mt-4 gap-y-4 h-full ">
          {tecnologies?.map((tecnology) => (
            <span
              className="bg-sky-950 w-[120px] justify-center gap-x-2  rounded-full py-2 flex items-center"
              key={tecnology._id}
            >
              <Image
                key={tecnology._id}
                src={tecnology.urlImage}
                alt={tecnology.name}
                className="w-[30px] h-[30px]"
                width={30}
                height={30}
              />
              {tecnology.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
