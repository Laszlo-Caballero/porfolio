import { DownloadIcon } from "@/assets/DownloadIcon";
import { GithubIcon } from "@/assets/GithubIcon";
import { LinkedlnIcon } from "@/assets/LinkedlnIcon";
import { TelegramIcon } from "@/assets/TelegramIcon";
import ButtonLink from "@/components/ui/ButtonLink/ButtonLink";
import { Typography } from "@/components/ui/Typography/Typography";
import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="w-full max-w-[1440px] flex flex-col pt-8 px-9">
      <Image
        src="/photo.png"
        alt="Picture of the author"
        className="w-20 h-20"
        width={80}
        height={80}
      />
      <div className="flex py-5 flex-col gap-y-2">
        <Typography variant="p">
          Nombre Completo Full Stack Developer
        </Typography>
        <Typography variant="p" className="max-w-[1008px] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <span className="text-primary-yellow">
            {" "}
            Desarrollador Fullstack{" "}
          </span>{" "}
          dolorum ab ea consequatur consectetur rem maiores excepturi. Expedita
          nihil ut perspiciatis minus eligendi temporibus? Hic repellat corporis
          ab saepe maxime architecto harum sint placeat quod dicta at velit
          excepturi cupiditate, natus optio, nostrum quia blanditiis nemo
          ducimus magnam. Aliquid earum expedita voluptates fugit totam.
        </Typography>
        <div className="flex items-center h-full gap-x-4">
          <ButtonLink href="a">
            <GithubIcon />
            Github
          </ButtonLink>
          <ButtonLink href="a">
            <LinkedlnIcon />
            Linkedln
          </ButtonLink>
          <ButtonLink href="a">
            <TelegramIcon />
            Telegram
          </ButtonLink>
          <ButtonLink href="a">
            <DownloadIcon />
            Descargar CV
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
