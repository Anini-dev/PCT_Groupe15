import { NextResponse } from 'next/server';
import { PrismaClient } from '../../generated/prisma'
const prisma = new PrismaClient()

export async function GET(request, { params }) {
  const paiement = await prisma.paiement.findUnique({
    where: { id: params.id },
  });
  return NextResponse.json(paiement);
}

export async function PUT(request, { params }) {
  const data = await request.json();
  const paiement = await prisma.paiement.update({
    where: { id: params.id },
    data,
  });
  return NextResponse.json(paiement);
}

export async function DELETE(request, { params }) {
  await prisma.paiement.delete({
    where: { id: params.id },
  });
  return NextResponse.json({ message: 'Paiement supprimé' });
}
