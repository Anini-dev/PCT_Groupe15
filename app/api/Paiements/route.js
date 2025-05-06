import { NextResponse } from 'next/server';
import { PrismaClient } from '../../generated/prisma'
const prisma = new PrismaClient()

export async function GET() {
  const paiements = await prisma.paiement.findMany();
  return NextResponse.json(paiements);
}

export async function POST(request) {
  const data = await request.json();
  const paiement = await prisma.paiement.create({ data });
  return NextResponse.json(paiement);
}
