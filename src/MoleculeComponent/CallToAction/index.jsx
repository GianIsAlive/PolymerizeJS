import React from 'react';

import MediumText from '../../AtomComponent/MediumText';
import SmallText from '../../AtomComponent/SmallText';
import MediumButton from '../../AtomComponent/MediumButton';

import './style.scss';

function CallToAction() {
  return (
    <section className="call-to-action">
      <MediumText>
        Styled and configurable templates with reusable components to enable software engineers to create elegant product
      </MediumText>
      <SmallText>
        Polymerize is created after seeing many talented software engineers struggling to make sense of their UI design.
        We are constantly thinking ways to make it better. There will be new feature every month.
      </SmallText>
      <MediumButton>
        Github
      </MediumButton>
    </section>
  );
}

export default CallToAction;
