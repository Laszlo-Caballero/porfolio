import React from 'react';
import { Typography } from '../Typography/Typography';

interface TimeLineProps {
  title?: string;
  description?: string;
  name?: string;
  date?: string;
  disabled?: boolean;
}

export default function TimeLine({ title, name, date, description, disabled }: TimeLineProps) {
  return (
    <div className="border-primary-gray-2 bg-primary-black-5 p-md:max-w-none relative ml-8 flex w-full max-w-[350px] flex-col rounded-xl border p-[17px]">
      <span className="bg-primary-yellow absolute top-0 left-0 block size-4 -translate-x-2 translate-y-6 rounded-full"></span>

      <Typography variant="p" className="p-xl:text-xl p-lg:text-base font-semibold text-white">
        {title}
      </Typography>
      {!disabled && (
        <div className="flex items-center justify-between pb-2 font-medium">
          <Typography
            variant="span"
            className="text-primary-gray p-xl:text-base p-lg:text-sm flex items-center gap-x-2"
          >
            {name}
          </Typography>
          <Typography variant="p" className="text-primary-gray p-xl:text-base p-lg:text-sm">
            {date}
          </Typography>
        </div>
      )}
      <div className="flex flex-col">
        <Typography
          variant="p"
          className="text-primary-gray p-xl:text-base p-lg:text-sm font-medium"
        >
          {description}
        </Typography>
      </div>
    </div>
  );
}
