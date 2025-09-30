import { Arquitecture } from '@/Interfaces/types';
import { getTranslations } from 'next-intl/server';
import React from 'react';
import { GrCubes } from 'react-icons/gr';
interface ArquitectureProps {
  data: Arquitecture[];
}

export default async function ArquitectureCard({ data }: ArquitectureProps) {
  const t = await getTranslations('projects');

  return (
    <section className="bg-primary-black-5 border-primary-gray-2 flex w-full flex-col gap-y-4 rounded-xl border p-[13px]">
      <span className="flex items-center gap-x-2">
        <GrCubes />
        <p className="font-semibold">{t('arquitecture')}</p>
      </span>

      <div className="grid grid-cols-2 gap-3">
        {data.map((item, i) => (
          <article
            className="border-primary-gray-2 w-full rounded-lg border p-4"
            style={{
              gridColumn: `span ${item.colSpan}`,
            }}
            key={i}
          >
            <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
            {item.badges && (
              <div className="mt-2 flex flex-wrap gap-2">
                {item.badges.map((badge, j) => (
                  <span className="border-primary-gray-2 rounded-xl border px-2 py-1" key={j}>
                    {badge}
                  </span>
                ))}
              </div>
            )}

            {item.detail && (
              <div className="mt-2 flex flex-col gap-y-1">
                {item.detail.map((detail, k) => (
                  <div className="flex w-full justify-between" key={k}>
                    <span className="font-medium text-gray-400">{detail.key}</span>
                    <span className="text-white">{detail.value}</span>
                  </div>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
