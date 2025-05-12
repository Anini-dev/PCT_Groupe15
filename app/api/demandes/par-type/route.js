import { PrismaClient } from '@/generated/prisma'; // Vérifie que le chemin est correct
import { NextResponse } from 'next/server';

const prisma = new PrismaClient()

export async function GET() {
  const demandes = await prisma.demande.findMany(
    {
      include: {
        utilisateur: true,   // optionnel : inclut les données de l'utilisateur
        paiement: true,      // optionnel
        fichiers: true,      // optionnel
        acte: true           // optionnel
      },
      orderBy: {
        createdAt: 'desc'
      }
    }
  );
  return NextResponse.json(demandes);
}

export async function POST(request) {
  const data = await request.json();
  const demande = await prisma.demande.create({ data });
  return NextResponse.json(demande);
}