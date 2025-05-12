import { NextResponse } from 'next/server';
import { PrismaClient, Role } from '../../generated/prisma';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

// GET : Récupérer tous les utilisateurs
export async function GET() {
  const utilisateurs = await prisma.utilisateur.findMany();
  return NextResponse.json(utilisateurs);
}

// POST : Créer un nouvel utilisateur
export async function POST(req) {
  try {
    const {
      nom,
      prenom,
      email,
      telephone,
      motDePasse,
      role,
      commune
    } = await req.json();

    if (!nom || !prenom || !email || !motDePasse) {
      return NextResponse.json({ error: 'Champs requis manquants.' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(motDePasse, 10);

    const existingUser = await prisma.utilisateur.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json({ error: 'Un utilisateur avec cet email existe déjà.' }, { status: 400 });
    }

    const userData = {
      nom,
      prenom,
      email,
      telephone,
      motDePasse: hashedPassword,
      role,
    };

    const newUtilisateur = await prisma.utilisateur.create({ data: userData });

    return NextResponse.json(newUtilisateur);
  } catch (error) {
    console.error("Erreur lors de la création de l'utilisateur:", error);
    return NextResponse.json(
      { error: error.message || 'Une erreur inconnue est survenue.' },
      { status: 500 }
    );
  }
}