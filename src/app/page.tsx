import { CodeIcon } from "@/assets/CodeIcon";
import { WorkIcon } from "@/assets/WorkIcon";
import Hero from "@/components/layout/Hero/Hero";
import Card from "@/components/ui/Card/Card";
import TimeLine from "@/components/ui/TimeLine/TimeLine";
import { Typography } from "@/components/ui/Typography/Typography";
import { GetExperience } from "@/Services/GetExperience";
import { GetProyects } from "@/Services/GetProyects";

export default async function Home() {
  const [data, proyects] = await Promise.all([GetExperience(), GetProyects()]);

  return (
    <main className="w-full max-w-[1440px] h-full flex-1 flex flex-col items-center ">
      <Hero />
      <div className="flex flex-col px-9 w-full py-2">
        <Typography
          variant="span"
          className="flex items-center w-full text-2xl font-medium gap-x-7"
        >
          <WorkIcon className="text-white w-10 h-10" strokeWidth={2} />
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

      <div className="mt-[38px] w-full flex flex-col px-9">
        <Typography
          variant="span"
          className="text-2xl font-medium text-white flex items-center gap-x-7"
        >
          <CodeIcon className="w-10 h-10" strokeWidth={2} />
          Proyectos
        </Typography>
        <div className="w-full grid grid-cols-3 gap-x-4 mt-4">
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
    </main>
  );
}
