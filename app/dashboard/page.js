'use client';
import Link from 'next/link';
import Image from "next/image";
import '../style/animated.css'
import '../style/templatemo-chain-app-dev.css'
import Barelateral from '../components/barelateral'
import Headers from '../components/Headers';



export default function DashboardSidebar() {
  return (
      <div className="wrapper d-flex">
        <aside className="left-sidebar bg-sidebar">
        <Barelateral/>
        </aside>

        <div className="page-wrapper">
          <Headers/>


          <div id="services" className="services section">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 offset-lg-2">
                  <div className="section-heading  wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">
                    <h4>Consulter <em>les demandes &amp; d Acte</em> en cours</h4>
                    <Image src="/images/logo.png" alt="Chain App Dev" width={120} height={40} />
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-3">
                  <div className="service-item first-service">
                    <div className="icon">10</div>
                    <h4>Déclaration de naissance</h4>
                    <div className="text-button">
                      <a href="#">Consulter <i className="fa fa-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="service-item second-service">
                    <div className="icon">10</div>
                    <h4>Extraire de naissance</h4>
                    <div className="text-button">
                      <a href="#">Consulter <i className="fa fa-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="service-item third-service">
                    <div className="icon">10</div>
                    <h4>Acte de Mariage civil</h4>
                    <div className="text-button">
                      <a href="#">Consulter<i className="fa fa-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="service-item fourth-service">
                    <div className="icon">10</div>
                    <h4>Certificat de decés</h4>
                    <div className="text-button">
                      <a href="#">Read More <i className="fa fa-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-3">
                  <div className="service-item first-service">
                    <div className="icon">10</div>
                    <h4>Acte de reconnaissance</h4>
                    <div className="text-button">
                      <a href="#">Consulter <i className="fa fa-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="service-item second-service">
                    <div className="icon">10</div>
                    <h4>Certificat de concubinage</h4>
                    <div className="text-button">
                      <a href="#">Consulter <i className="fa fa-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="service-item third-service">
                    <div className="icon">10</div>
                    <h4>Acte de légitimation</h4>
                    <div className="text-button">
                      <a href="#">Consulter<i className="fa fa-arrow-right"></i></a>
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
