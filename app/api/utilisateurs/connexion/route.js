import { NextResponse } from 'next/server';
// import { PrismaClient, Role } from '@prisma/client';
import { PrismaClient, Role } from '../../../generated/prisma'
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const { email, motDePasse } = await req.json();

    const user = await prisma.utilisateur.findUnique({
      where: { email },
    });
    

    // Si l'utilisateur n'existe pas ou si le mot de passe est incorrect
    if (!user || !(await bcrypt.compare(motDePasse, user.motDePasse))) {
      return NextResponse.json({ message: 'Identifiants incorrects' }, { status: 401 });
    }

    // On exclut le mot de passe des données envoyées dans la réponse
    const { motDePasse: _, ...userSansMdp } = user;

    // Vérifie que `user.id` est bien là
    if (!userSansMdp.id) {
      console.error("Utilisateur sans ID :", userSansMdp);
    }
    return NextResponse.json(userSansMdp, { status: 200 });

  } catch (error) {
    console.error("Erreur lors de la connexion de l'utilisateur:", error);
    return NextResponse.json(
      { error: error.message || 'Une erreur inconnue est survenue.' },
      { status: 500 }
    );
  }
}