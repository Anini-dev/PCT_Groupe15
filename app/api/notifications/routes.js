import { NextResponse } from 'next/server';
import { PrismaClient} from '../../generated/prisma'
const prisma = new PrismaClient()

export async function GET() {
  const notifications = await prisma.notification.findMany();
  return NextResponse.json(fichiers);
}

export async function POST(request) {
  const data = await request.json();
  const notification = await prisma.notification.create({ data });
  return NextResponse.json(fichier);
}
