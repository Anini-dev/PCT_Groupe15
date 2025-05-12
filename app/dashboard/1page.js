'use client';

import { useState } from 'react';
import { useSession } from "next-auth/react";

export default function TestConnexion() {
  const [message, setMessage] = useState('');
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Chargement...</p>;
  }
  if (status === "unauthenticated") {
    return <p>Accès refusé. Veuillez vous connecter.</p>;
  }

  const testerConnexion = async () => {
    setMessage('⏳ Envoi en cours...');
    try {
      const res = await fetch('../api/utilisateurs/connexion', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: 'aq@a',         // ← remplace par un email valide en base
          motDePasse: 'a'      // ← mot de passe clair correspondant au hash
        })
      });

      const data = await res.json();

      if (res.ok) {
        console.log('✅ Connexion réussie :', data);
        setMessage(`✅ Utilisateur connecté : ${data.nom} ${data.prenom} ${data.telephone} ${data.email}`);
      } else {
        console.error('⛔ Erreur :', data);
        setMessage(`❌ Erreur : ${data.message || data.error}`);
      }
    } catch (err) {
      console.error('❌ Erreur fetch :', err);
      setMessage('❌ Erreur réseau ou serveur.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={testerConnexion} style={{ padding: '10px 20px' }}>
        Tester Connexion
      </button>
      <p>{message}</p>
      <div>
      <h1>Bienvenue, {session.user.nom}</h1>
      <p>Email : {session.user.email}</p>
      <p>Téléphone : {session.user.telephone}</p>
      <p>Rôle : {session.user.role}</p>
      <p>Commune : {session.user.commune}</p>
      {/* tu peux afficher d'autres champs ici */}
    </div>
    </div>
  );
}
