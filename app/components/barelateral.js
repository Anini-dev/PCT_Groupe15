'use client';

import { useState } from 'react';
import { useSession } from "next-auth/react";
import Link from 'next/link';
import Image from 'next/image';

export default function Barelateral() {
    const [message, setMessage] = useState('');
    const { data: session, status } = useSession();
    if (status === "loading") {
        return <p>Chargement...</p>;
      }
      if (status === "unauthenticated") {
        return <p>Accès refusé. Veuillez vous connecter.</p>;
      }
    return (

        <div id="sidebar" className="sidebar sidebar-with-footer">
            {/* Logo */}
            <div className="app-brand">
              <a href="/public/images/logo.png" className="logo">
                <Image 
                    src="/images/logo.png"
                    alt="Chain App Dev"
                    width={150}
                    height={40} />
                <span className="brand-name">Gestion Etat Civile</span>
              </a>
            </div>

            {/* Menu */}
            <div data-simplebar style={{ height: '100%' }}>
              <ul className="sidebar-inner" id="sidebar-menu">

                {/* Tableau de bord */}
                <li className="has-sub active">
                    <span className="nav-text">utilisateur</span>
                </li>

                {/* Utilisateurs */}
                <li className="has-sub">
                Nom : {session.user.nom}
                </li>
                <li className="has-sub">
                Prenom : {session.user.nom}
                </li>
                {/* Déclarations */}
                <li className="has-sub">
                Commune : {session.user.commune}
                </li>

                {/* Communes */}
                <li className="has-sub">
                  <Link href="/communes" className="sidenav-item-link">
                    se deconnecter
                  </Link>
                </li>

                {/* Paramètres */}
                <li className="has-sub">
                  <Link href="/parametres" className="sidenav-item-link">
                    <i className="mdi mdi-cog-outline"></i>
                    <span className="nav-text">Paramètres</span>
                  </Link>
                </li>

              </ul>
            </div>
        </div>

    );
}