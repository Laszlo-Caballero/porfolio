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
    <div className="border-primary-gray-2 bg-primary-black-5 relative ml-8 flex w-full flex-col rounded-xl border p-[17px]">
      <span className="bg-primary-yellow absolute top-0 left-0 block size-4 -translate-x-2 translate-y-6 rounded-full"></span>

      <Typography variant="p" className="text-xl font-semibold text-white">
        {title}
      </Typography>
      {!disabled && (
        <div className="flex items-center justify-between pb-2 font-medium">
          <Typography variant="span" className="text-primary-gray flex items-center gap-x-2">
            {name}
          </Typography>
          <Typography variant="p" className="text-primary-gray">
            {date}
          </Typography>
        </div>
      )}
      <div className="flex flex-col">
        <Typography variant="p" className="text-primary-gray font-medium">
          {description}
        </Typography>
      </div>
    </div>
  );
}
