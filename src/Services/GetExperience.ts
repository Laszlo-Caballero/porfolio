import { ExperienceResponsive, Responsive } from '@/Interfaces/types';

export async function GetExperience(): Promise<Responsive<ExperienceResponsive[]>> {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/public/experience`, {
    cache: 'no-store',
  });

  const jsonData = await data.json();

  return jsonData;
}
