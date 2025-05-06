import { NextResponse } from 'next/server';
import { PrismaClient } from '../../generated/prisma'
const prisma = new PrismaClient()

export async function GET(request, { params }) {
  const demande = await prisma.demande.findUnique({
    where: { id: params.id },
  });
  return NextResponse.json(demande);
}

export async function PUT(request, { params }) {
  const data = await request.json();
  const demande = await prisma.demande.update({
    where: { id: params.id },
    data,
  });
  return NextResponse.json(demande);
}

export async function DELETE(request, { params }) {
  await prisma.demande.delete({
    where: { id: params.id },
  });
  return NextResponse.json({ message: 'Demande supprimée' });
}
