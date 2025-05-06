import { NextResponse } from 'next/server';
import { PrismaClient } from '../../generated/prisma'
const prisma = new PrismaClient()

export async function GET(request, { params }) {
  const commune = await prisma.commune.findUnique({
    where: { id: params.id },
  });
  return NextResponse.json(commune);
}

export async function PUT(request, { params }) {
  const data = await request.json();
  const commune = await prisma.commune.update({
    where: { id: params.id },
    data,
  });
  return NextResponse.json(commune);
}

export async function DELETE(request, { params }) {
  await prisma.commune.delete({
    where: { id: params.id },
  });
  return NextResponse.json({ message: 'commune supprimé' });
}
