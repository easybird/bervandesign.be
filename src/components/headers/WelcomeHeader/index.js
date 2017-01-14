import React, { PropTypes } from 'react';
import HeroImages from '../HeroImages';
import styles from './index.css';
import Pointer from '../Pointer';

const WelcomeHeader = ({ scrollTo, isActive, head, pageHeightLoss }) => (
  <header
    className={styles.welcomeHeader}
    style={{ height: `calc(100vh - ${pageHeightLoss})` }}
  >
    <div className={styles.banner}>
      <HeroImages autoplayInteval={5000}
                  links={head.hero.images}
                  title={head.hero.title}
                  height="75vh"
                  random={true}
      />
    </div>
    <Pointer
      scrollTo={scrollTo}
      isActive={isActive}
    />
  </header>
);

WelcomeHeader.propTypes = {
  scrollTo: React.PropTypes.string,
  isActive: React.PropTypes.func,
  head: PropTypes.object.isRequired,
  pageHeightLoss: React.PropTypes.string.isRequired
};

export default WelcomeHeader
