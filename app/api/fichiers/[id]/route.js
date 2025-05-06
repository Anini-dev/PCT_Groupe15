import { NextResponse } from 'next/server';
import { PrismaClient } from '../../generated/prisma'
const prisma = new PrismaClient()

export async function GET(request, { params }) {
  const fichier = await prisma.fichier.findUnique({
    where: { id: params.id },
  });
  return NextResponse.json(fichier);
}

export async function PUT(request, { params }) {
  const data = await request.json();
  const fichier = await prisma.fichier.update({
    where: { id: params.id },
    data,
  });
  return NextResponse.json(fichier);
}

export async function DELETE(request, { params }) {
  await prisma.fichier.delete({
    where: { id: params.id },
  });
  return NextResponse.json({ message: 'Fichier supprimé' });
}
