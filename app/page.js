import Image from "next/image";
import './style/animated.css'
import './style/templatemo-chain-app-dev.css'
import PopupLogin from './components/PopupLogin'

export default function Home() {
  return (
    <div>
    
    {/* // <!-- ***** Header Area Start ***** --> */}
    <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <nav className="main-nav">
            {/* <!-- ***** Logo Start ***** --> */}
            <a href="index.html" className="logo">
              <img src="../public/images/logo.png" alt="Chain App Dev"/>
            </a>
            {/* <!-- ***** Logo End ***** -->
            <!-- ***** Menu Start ***** --> */}
            <ul className="nav">
              <li className="scroll-to-section"><a href="#top" className="active">Accueil</a></li>
              <li className="scroll-to-section"><a href="#services">Naissance</a></li>
              <li className="scroll-to-section"><a href="#about">Mariage</a></li>
              <li className="scroll-to-section"><a href="#pricing">Déces</a></li>
              <li className="scroll-to-section"><a href="#newsletter">Rectification</a></li>
              <li><div className="gradient-button"><PopupLogin/>
              </div></li> 
            </ul>        
            <a className='menu-trigger'>
                <span>Menu</span>
            </a>
            {/* <!-- ***** Menu End ***** --> */}
          </nav>
        </div>
      </div>
    </div>
  </header>
  {/* // ***** Header Area End *****  */}

  



  <div className="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="left-content show-up header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
                <div className="row">
                  <div className="col-lg-12">
                    <h2>Gestion de l`etat civile</h2>
                    <p>Notre plateforme vous permet d’accéder facilement aux services d’état civil : déclaration de naissance, mariage, décès, demandes de duplicata, rectifications et bien plus. Centralisée, rapide et sécurisée, elle rapproche l’administration du citoyen, où que vous soyez.</p>
                  </div>
                  <div className="col-lg-12">
                    <div className="white-button first-button scroll-to-section">
                    <PopupLogin/>
                    </div>
                    <div className="white-button scroll-to-section">
                      <a href="#contact">créer un compte <i className="fab fa-google-play"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                <img src="assets/images/slider-dec.png" alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  

  </div>


  );
}
