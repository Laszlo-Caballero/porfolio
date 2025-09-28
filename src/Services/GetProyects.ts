import { ProyectResponsive, Responsive } from '@/Interfaces/types';
import connectMongoDB from '@/lib/mongo';
import Project from '@/schemas/projects/project.schema';
import { cache } from 'react';

export async function GetProyects(): Promise<Responsive<ProyectResponsive[]>> {
  await connectMongoDB();

  const data = await Project.find();

  const parseData = data.map((item) => {
    return {
      ...item.toObject(),
      _id: item._id.toString(),
    };
  }) as ProyectResponsive[];

  const outStanding = parseData.filter((item) => item.outStanding);

  if (outStanding.length > 0) {
    parseData.sort((a, b) => {
      if (a.outStanding && !b.outStanding) return -1;
      if (!a.outStanding && b.outStanding) return 1;
      return 0;
    });
  }

  return {
    body: parseData,
    message: 'All experiences',
    status: 200,
  };
}

export async function GetProyectsLimit(limit: number): Promise<Responsive<ProyectResponsive[]>> {
  await connectMongoDB();
  const data = await Project.find().limit(limit);

  const parseData = data.map((item) => {
    return {
      ...item.toObject(),
      _id: item._id.toString(),
    };
  }) as ProyectResponsive[];

  const outStanding = parseData.filter((item) => item.outStanding);

  if (outStanding.length > 0) {
    parseData.sort((a, b) => {
      if (a.outStanding && !b.outStanding) return -1;
      if (!a.outStanding && b.outStanding) return 1;
      return 0;
    });
  }

  return {
    body: parseData,
    message: 'All experiences',
    status: 200,
  };
}

export async function GetProyectBySlug(
  slug: string,
): Promise<Responsive<ProyectResponsive | null>> {
  await connectMongoDB();

  const data = await Project.findOne({ slug: slug });

  if (!data) {
    return {
      body: null,
      message: 'Project not found',
      status: 404,
    };
  }

  const parseData = {
    ...data.toObject(),
    _id: data._id.toString(),
  } as ProyectResponsive;

  return {
    body: parseData,
    message: 'Project found',
    status: 200,
  };
}

export const GetProyectCache = cache(async (slug: string) => {
  return await GetProyectBySlug(slug);
});
