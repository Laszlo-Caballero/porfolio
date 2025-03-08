import React from "react";

export default function Nav() {
  return (
    <header className="w-full flex items-center justify-center bg-primary-black sticky top-0 z-10">
      <ul className="flex gap-x-6 py-8">
        <li>Inicio</li>
        <li>Experencia</li>
        <li>Proyectos</li>
        <li>Certificaciones</li>
        <li>Contactar</li>
      </ul>
    </header>
  );
}
