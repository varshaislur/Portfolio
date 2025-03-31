// app/api/projects/route.ts
import { NextResponse } from 'next/server';
import { experience } from '@/data/experience';

export async function GET() {
  return NextResponse.json(experience);
}

