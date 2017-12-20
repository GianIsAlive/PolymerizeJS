import React from 'react';

// component
import CallToAction from '../../MoleculeComponent/CallToAction';
import FullWidthImg from '../../AtomComponent/FullWidthImg';
import PrimaryText from '../../AtomComponent/PrimaryText';

// style
import './style.scss';

// assets
import AlineaImg from '../../assets/Alinea.jpg';

function BannerBlockView() {
  return (
    <section className="banner-block">
      <div className="bb-left-container">
        <div className="bb-left">
          <PrimaryText>
            Polymerize
          </PrimaryText>
          <CallToAction />
        </div>
      </div>
      <div className="bb-right-container">
        <FullWidthImg src={`dist/${AlineaImg}`} alt="apollo template" />
      </div>
    </section>
  );
}

export default BannerBlockView;