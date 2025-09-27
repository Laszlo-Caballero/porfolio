import Image from 'next/image';
import { PropsWithChildren } from 'react';

interface TecnologieProps {
  urlImage: string;
  altImage: string;
  name: string;
}

export function Tecnologie({ urlImage, altImage, name }: TecnologieProps) {
  return (
    <span className="bg-primary-black-4 text-primary-gray flex max-w-max flex-1/2 items-center gap-x-2 rounded-lg">
      <Image
        loading="eager"
        height={18}
        width={18}
        src={urlImage}
        alt={altImage}
        className="size-5"
      />

      {name}
    </span>
  );
}

export function TecnologieContainer({ children }: PropsWithChildren) {
  return (
    <div className="bg-primary-black-3 border-primary-gray-2 mt-4 flex w-full flex-wrap gap-4 rounded-xl border p-6">
      {children}
    </div>
  );
}
