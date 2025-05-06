import { NextResponse } from 'next/server';
import { PrismaClient } from '../../generated/prisma'
const prisma = new PrismaClient()

// GET : Récupérer tous les communes
export async function GET() {
  const communes = await prisma.commune.findMany();
  return NextResponse.json(communes);
}

export async function POST(request) {
  const data = await request.json();
  const commune = await prisma.commune.create({ data });
  return NextResponse.json(commune);
}
