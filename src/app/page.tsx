import { DownloadIcon } from "@/assets/DownloadIcon";
import { GithubIcon } from "@/assets/GithubIcon";
import { LinkedlnIcon } from "@/assets/LinkedlnIcon";
import { TelegramIcon } from "@/assets/TelegramIcon";
import { WorkIcon } from "@/assets/WorkIcon";
import Hero from "@/components/layout/Hero/Hero";
import ButtonLink from "@/components/ui/ButtonLink/ButtonLink";
import Nav from "@/components/ui/Nav/Nav";
import TimeLine from "@/components/ui/TimeLine/TimeLine";
import { Typography } from "@/components/ui/Typography/Typography";
import Image from "next/image";

export default function Home() {
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
          <TimeLine
            title="Ingeniero de Software"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto porro autem earum voluptatibus suscipit commodi, deserunt facilis? Tenetur harum eos fugit? Hic nam ab repellat recusandae qui aut soluta dolorem."
            name="Empresa"
            date="2019 - 2021"
          />
          <TimeLine
            title="Con disposición para asumir nuevos retos que me ayuden a seguir evolucionando."
            disabled
          />
        </div>
      </div>
    </main>
  );
}
