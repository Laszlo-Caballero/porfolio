import { CodeIcon } from '@/assets/CodeIcon';
import EngineerIcon from '@/assets/EngineerIcon';
import { WorkIcon } from '@/assets/WorkIcon';
import Hero from '@/components/layout/Hero/Hero';
import FormContact from '@/components/shared/formContact';
import Card from '@/components/ui/Card/Card';
import TimeLine from '@/components/ui/TimeLine/TimeLine';
import { Typography } from '@/components/ui/Typography/Typography';
import { GetAllTecnologies } from '@/Services/GetallTecnologies';
import { GetExperience } from '@/Services/GetExperience';
import { GetProyects } from '@/Services/GetProyects';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

export default async function Home() {
  const [data, proyects, tecnologies] = await Promise.all([
    GetExperience(),
    GetProyects(),
    GetAllTecnologies(),
  ]);

  console.log(tecnologies);

  return (
    <main className="flex h-full w-full flex-1 flex-col items-center">
      <Hero />
      <div className="flex w-full max-w-[1440px] flex-col px-9 py-2">
        <Typography
          variant="span"
          className="flex w-full items-center gap-x-7 text-2xl font-medium"
        >
          <WorkIcon className="h-10 w-10 text-white" strokeWidth={2} />
          Experiencia
        </Typography>
        <div className="mt-4">
          {data.body.map((experience) => (
            <TimeLine
              key={experience._id}
              title={experience.title}
              description={experience.description}
              name={experience.company}
              date={experience.time}
              image={experience.urlImage}
            />
          ))}
          <TimeLine
            title="Con disposición para asumir nuevos retos que me ayuden a seguir evolucionando."
            disabled
            image=""
          />
        </div>
      </div>

      <div className="mt-[38px] flex w-full max-w-[1440px] flex-col px-9">
        <Typography
          variant="span"
          className="flex items-center gap-x-7 text-2xl font-medium text-white"
        >
          <CodeIcon className="h-10 w-10" strokeWidth={2} />
          Proyectos
        </Typography>
        <div className="mt-4 grid w-full grid-cols-3 gap-x-4">
          {proyects.body.map((proyect) => {
            return (
              <Card
                key={proyect._id}
                description={proyect.description}
                tecnologies={proyect.tecnologies}
                githubUrl={proyect.githubUrl}
                image={proyect.urlImage}
                title={proyect.title}
              />
            );
          })}
        </div>
      </div>

      <div className="mt-11 flex flex-col items-center space-y-12">
        <Typography
          variant="span"
          className="flex w-[1440px] items-center gap-x-7 px-9 text-2xl font-medium text-white"
        >
          <EngineerIcon className="h-10 w-10" strokeWidth={2} />
          Tecnologias
        </Typography>
        <Marquee speed={70}>
          {tecnologies.body.map((tecnology) => (
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
