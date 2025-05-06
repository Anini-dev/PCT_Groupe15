import { NextResponse } from 'next/server';
import { PrismaClient } from '../../generated/prisma'
const prisma = new PrismaClient()

export async function GET(request, { params }) {
  const utilisateur = await prisma.utilisateur.findUnique({
    where: { id: params.id },
  });
  return NextResponse.json(utilisateur);
}

export async function PUT(request, { params }) {
  const data = await request.json();
  const utilisateur = await prisma.utilisateur.update({
    where: { id: params.id },
    data,
  });
  return NextResponse.json(utilisateur);
}

export async function DELETE(request, { params }) {
  await prisma.utilisateur.delete({
    where: { id: params.id },
  });
  return NextResponse.json({ message: 'Utilisateur supprimé' });
}
