// app/components/Headers.js
'use client'; // si tu utilises du code côté client, comme des handlers ou des animations

import PopupLogin from './PopupLogin.js';
import Image from 'next/image'; // recommandé pour les images dans Next.js

export default function Header() {
  return (
    <header id="header" className="header-area main-header header-stickyZ wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              {/* Logo */}
              <a href="/public/images/logo.png" className="logo">
                <Image src="/images/logo.png" alt="Chain App Dev" width={120} height={40} />
              </a>

              {/* Menu */}
              <ul className="nav">
                <li className="scroll-to-section"><a href="#top" className="active">Accueil</a></li>
                <li className="scroll-to-section"><a href="#services">Naissance</a></li>
                <li className="scroll-to-section"><a href="#about">Mariage</a></li>
                <li className="scroll-to-section"><a href="#pricing">Décès</a></li>
                <li className="scroll-to-section"><a href="#newsletter">Rectification</a></li>
                <li>
                  <div className="gradient-button">
                    <PopupLogin />
                  </div>
                </li>
              </ul>

              <a className="menu-trigger">
                <span>Menu</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
