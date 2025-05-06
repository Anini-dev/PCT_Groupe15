import { NextResponse } from 'next/server';
import { PrismaClient } from '../../generated/prisma'
const prisma = new PrismaClient()

export async function GET(request, { params }) {
  const notification = await prisma.notification.findUnique({
    where: { id: params.id },
  });
  return NextResponse.json(notification);
}

export async function PUT(request, { params }) {
  const data = await request.json();
  const notification = await prisma.notification.update({
    where: { id: params.id },
    data,
  });
  return NextResponse.json(notification);
}

export async function DELETE(request, { params }) {
  await prisma.notification.delete({
    where: { id: params.id },
  });
  return NextResponse.json({ message: 'notification supprimée' });
}
