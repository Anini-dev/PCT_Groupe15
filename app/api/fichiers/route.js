import { NextResponse } from 'next/server';
import { PrismaClient } from '../../generated/prisma'
const prisma = new PrismaClient()

export async function GET() {
  const fichiers = await prisma.fichier.findMany();
  return NextResponse.json(fichiers);
}

export async function POST(request) {
  const data = await request.json();
  const fichier = await prisma.fichier.create({ data });
  return NextResponse.json(fichier);
}
