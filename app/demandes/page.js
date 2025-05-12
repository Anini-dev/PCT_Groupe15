'use client';
import Link from 'next/link';
import Image from "next/image";
import '../style/animated.css'
import '../style/templatemo-chain-app-dev.css'
import Barelateral from '../components/barelateral'
import Headers from '../components/Headers';
import ListeDemandesTable from '../components/ListeDemandesTable'


export default function Demandes() {
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
                <div className="col-lg-12">
                <ListeDemandesTable/>
                </div>
              </div>
            </div>
           </div>            


            </div>
        </div>
      
    );
  }
  