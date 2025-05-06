import { NextResponse } from 'next/server';
import { PrismaClient } from '../../generated/prisma'
const prisma = new PrismaClient()

export async function GET() {
  const demandes = await prisma.demande.findMany();
  return NextResponse.json(demandes);
}

export async function POST(request) {
  const data = await request.json();
  const demande = await prisma.demande.create({ data });
  return NextResponse.json(demande);
}
