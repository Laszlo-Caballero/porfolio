import { Responsive, Tecnologies } from '@/Interfaces/types';

export async function GetAllTecnologies(): Promise<Responsive<Tecnologies[]>> {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/public/tecnologies`, {
    cache: 'no-store',
  });

  const jsonData = await data.json();

  return jsonData;
}
