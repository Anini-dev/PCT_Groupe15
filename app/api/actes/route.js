import { NextResponse } from 'next/server';
import { PrismaClient } from '../../generated/prisma'
const prisma = new PrismaClient()

export async function GET() {
  const actes = await prisma.acte.findMany();
  return NextResponse.json(actes);
}

export async function POST(request) {
  const data = await request.json();
  const acte = await prisma.acte.create({ data });
  return NextResponse.json(acte);
}
