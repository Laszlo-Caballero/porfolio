import React from 'react';

export default function Nav() {
  return (
    <header className="bg-primary-black-2/80 sticky top-0 z-10 flex w-full items-center justify-center">
      <ul className="flex gap-x-6 py-8 text-xl">
        <li>Inicio</li>
        <li>Experencia</li>
        <li>Proyectos</li>
        <li>Certificaciones</li>
        <li>Contactar</li>
      </ul>
    </header>
  );
}
