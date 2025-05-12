'use client';

import { useState } from 'react';
import '../style/PopupLogin.css'
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function PopupLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      redirect: false,
      email,
      motDePasse,
      callbackUrl: "/dashboard" // <- utile pour NextAuth
    });

    console.log("Résultat de signIn :", res);

    if (res.ok) {
      router.push("/dashboard");
    } else {
      console.error("Erreur de connexion :", res.error);
      alert("Échec de connexion : " + (res.error || "Erreur inconnue"));
    }
  };

  return (
    <div>
      {/* Bouton d'ouverture */}
      <a
        href="#"
        id="modal_trigger"
        onClick={(e) => {
          e.preventDefault();
          setShowModal(true);
        }}
      >
        <i className="fa fa-sign-in-alt"></i> Se connecter
      </a>

      {/* Modal */}
      {showModal && (
        <div className="popupContainer show fadeIn">
          <div className="popupHeader">
            <span className="header_title">Login</span>
            <span
              className="modal_close"
              onClick={() => setShowModal(false)}
            >
              <i className="fa fa-times"></i>
            </span>
          </div>

          <section className="popupBody">
            <div className="user_login">
              <form onSubmit={handleLogin}>
                <label>Votre Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label>Mot de passe</label>
                <input
                  type="password"
                  value={motDePasse}
                  onChange={(e) => setMotDePasse(e.target.value)}
                  required
                />

                <div className="checkbox">
                  <input id="remember" type="checkbox" />
                  <label htmlFor="remember">se souvenir</label>
                </div>

                <div className="action_btns">
                  <button type="submit" className="btn btn_red">Se connecter</button>
                </div>
              </form>
              <a href="#" className="forgot_password">Mot de passe oublié ?</a>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}