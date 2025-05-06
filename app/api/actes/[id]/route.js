import { NextResponse } from 'next/server';
import { PrismaClient } from '../../generated/prisma'
const prisma = new PrismaClient()

export async function GET(request, { params }) {
  const acte = await prisma.acte.findUnique({
    where: { id: params.id },
  });
  return NextResponse.json(acte);
}

export async function PUT(request, { params }) {
  const data = await request.json();
  const acte = await prisma.acte.update({
    where: { id: params.id },
    data,
  });
  return NextResponse.json(acte);
}

export async function DELETE(request, { params }) {
  await prisma.acte.delete({
    where: { id: params.id },
  });
  return NextResponse.json({ message: 'acte supprimé' });
}
