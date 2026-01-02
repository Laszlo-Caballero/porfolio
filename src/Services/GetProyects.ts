import { ProyectResponsive, Responsive } from '@/Interfaces/types';
import { cache } from 'react';

export async function GetProyects(): Promise<Responsive<ProyectResponsive[]>> {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/public/proyects`, {
    cache: 'no-store',
  });

  const json = await data.json();

  return json;
}

export async function GetProyectsLimit(): Promise<Responsive<ProyectResponsive[]>> {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/public/proyects/outstanding`, {
    cache: 'no-store',
  });
  const json = await data.json();

  return json;
}

export async function GetProyectBySlug(
  slug: string,
): Promise<Responsive<ProyectResponsive | null>> {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/public/proyects/slug/${slug}`, {
    cache: 'no-store',
  });

  if (!data.ok) {
    return data.json();
  }

  const json = await data.json();

  return json;
}

export const GetProyectCache = cache(async (slug: string) => {
  return await GetProyectBySlug(slug);
});
