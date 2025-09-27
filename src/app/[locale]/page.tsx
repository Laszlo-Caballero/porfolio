import EngineerIcon from '@/assets/EngineerIcon';
import Hero from '@/components/layout/Hero/Hero';
import FormContact from '@/components/shared/formContact';
import Card from '@/components/ui/Card/Card';
import TimeLine from '@/components/ui/TimeLine/TimeLine';
import { Typography } from '@/components/ui/Typography/Typography';
import { GetAllTecnologies } from '@/Services/GetallTecnologies';
import { GetExperience } from '@/Services/GetExperience';
import { GetProyects } from '@/Services/GetProyects';
import { cn } from '@/utils/cn';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { CgWorkAlt } from 'react-icons/cg';
import { IoCode } from 'react-icons/io5';
export default async function Home() {
  const [data, proyects, tecnologies] = await Promise.all([
    GetExperience(),
    GetProyects(),
    GetAllTecnologies(),
  ]);

  const length = tecnologies.body.length;

  const fistMiddle = tecnologies.body.slice(0, Math.floor(length / 2));
  const secondMiddle = tecnologies.body.slice(Math.floor(length / 2), length);

  const t = await getTranslations('home');

  return (
    <main className="flex h-full w-full flex-1 flex-col items-center">
      <Hero />
      <div className="mt-11 flex w-full max-w-[1440px] flex-col px-9 py-12">
        <Typography
          variant="span"
          className="flex w-full items-center gap-x-2 text-2xl font-semibold"
        >
          <CgWorkAlt />
          {t('experience')}
        </Typography>
        <div className="mx-3 mt-4 flex flex-col gap-y-6 border-l">
          {data.body.map((experience) => (
            <TimeLine
              key={experience._id}
              title={experience.title}
              description={experience.description}
              name={experience.company}
              date={experience.time}
            />
          ))}
          <TimeLine
            title="Con disposición para asumir nuevos retos que me ayuden a seguir evolucionando."
            disabled
          />
        </div>
      </div>

      <div className="flex w-full max-w-[1440px] flex-col px-9 py-12">
        <Typography
          variant="span"
          className="flex w-full items-center gap-x-2 text-2xl font-semibold"
        >
          <IoCode />
          {t('projects')}
        </Typography>
        <div className="mt-12 grid grid-cols-4 gap-4">
          {proyects.body.map((proyect, i) => {
            return <Card key={proyect._id} {...proyect} className={cn(i > 2 && 'col-span-2')} />;
          })}
        </div>
      </div>

      <div className="flex flex-col items-center space-y-12 py-12">
        <Typography
          variant="span"
          className="flex w-[1440px] items-center gap-x-7 px-9 text-2xl font-medium text-white"
        >
          <EngineerIcon className="h-10 w-10" strokeWidth={2} />
          {t('technologies')}
        </Typography>
        <Marquee className="mt-12" speed={70} autoFill>
          {fistMiddle.map((tecnology) => (
            <Image
              key={tecnology._id}
              src={tecnology.urlImage}
              alt={tecnology.altImage}
              width={98}
              height={98}
              className="ml-5 max-h-[98px] w-auto"
            />
          ))}
        </Marquee>
        <Marquee className="mt-4" speed={70} autoFill direction="right">
          {secondMiddle.map((tecnology) => (
            <Image
              key={tecnology._id}
              src={tecnology.urlImage}
              alt={tecnology.altImage}
              width={98}
              height={98}
              className="ml-5 max-h-[98px] w-auto"
            />
          ))}
        </Marquee>
      </div>
      <FormContact />
    </main>
  );
}
