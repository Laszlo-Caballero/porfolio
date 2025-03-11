import React from "react";
import { Typography } from "../Typography/Typography";
import { WorkSmallIcon } from "@/assets/WorkSmallIcon";
import Image from "next/image";

interface TimeLineProps {
  title?: string;
  description?: string;
  name?: string;
  date?: string;
  disabled?: boolean;
  image: string;
}

export default function TimeLine({
  title,
  name,
  date,
  description,
  disabled,
  image,
}: TimeLineProps) {
  return (
    <div className=" w-full flex flex-col max-w-[800px]">
      <div className="flex items-center gap-x-7">
        <div className="  bg-primary-black w-11 flex items-center">
          <span className="p-3 rounded-full border-white border-2">
            <WorkSmallIcon className="w-4 h-4 text-white" />
          </span>
        </div>

        <Typography variant="p" className="text-primary-yellow text-lg">
          {title}
        </Typography>
      </div>
      <div className="border-l border-white ml-[22px] pl-12 flex flex-col">
        <Typography variant="p" className="font-medium text-lg ">
          {description}
        </Typography>
        {!disabled && (
          <div className="flex items-center justify-between pb-2">
            <Typography
              variant="span"
              className="mt-3.5 flex items-center gap-x-2"
            >
              <Image
                src={image}
                alt="photo empresa"
                className="w-[34px] h-[34px]"
                width={34}
                height={34}
              />
              {name}
            </Typography>
            <Typography variant="p">{date}</Typography>
          </div>
        )}
      </div>
    </div>
  );
}
