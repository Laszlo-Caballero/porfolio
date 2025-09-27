import EngineerIcon from '@/assets/EngineerIcon';
import Hero from '@/components/layout/Hero/Hero';
import FormContact from '@/components/shared/formContact';
import Card from '@/components/ui/Card/Card';
import TimeLine from '@/components/ui/TimeLine/TimeLine';
import { Typography } from '@/components/ui/Typography/Typography';
import { GetAllTecnologies } from '@/Services/GetallTecnologies';
import { GetExperience } from '@/Services/GetExperience';
import { GetProyectsLimit } from '@/Services/GetProyects';
import { cn } from '@/utils/cn';
import { getTranslations } from 'next-intl/server';
import { CgWorkAlt } from 'react-icons/cg';
import { IoCode } from 'react-icons/io5';
import { HiCpuChip } from 'react-icons/hi2';
import { Tecnologie, TecnologieContainer } from '@/components/ui/Tenologie/Tecnologie';

export default async function Home() {
  const [data, proyects, tecnologies] = await Promise.all([
    GetExperience(),
    GetProyectsLimit(5),
    GetAllTecnologies(),
  ]);

  const t = await getTranslations('home');

  return (
    <main className="flex h-full w-full flex-1 flex-col items-center">
      <Hero />
      <div className="mt-11 flex w-full flex-col px-9 py-12">
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

      <div className="flex w-full flex-col px-9 py-12">
        <Typography
          variant="span"
          className="flex w-full items-center gap-x-2 text-2xl font-semibold"
        >
          <IoCode />
          {t('projects')}
        </Typography>
        <div className="mt-12 grid grid-cols-6 gap-4">
          {proyects.body.map((proyect, i) => {
            return <Card key={proyect._id} {...proyect} className={cn(i > 2 && 'col-span-3')} />;
          })}
        </div>
      </div>

      <div className="flex w-full flex-col px-9 py-12">
        <Typography
          variant="span"
          className="flex w-full items-center gap-x-2 text-2xl font-semibold"
        >
          <HiCpuChip />
          {t('technologies')}
        </Typography>

        <TecnologieContainer>
          {tecnologies.body.map((tecnology) => (
            <Tecnologie
              key={tecnology._id}
              urlImage={tecnology.urlImage}
              altImage={tecnology.altImage}
              name={tecnology.altImage}
            />
          ))}
        </TecnologieContainer>
      </div>
      <FormContact />
    </main>
  );
}
