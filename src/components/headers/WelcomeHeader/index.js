import React, { PropTypes } from 'react';
import HeroImages from '../HeroImages';
import styles from './index.css';

const WelcomeHeader = ({ scrollTo, head, pageHeightLoss }) => (
    <header
      className={styles.welcomeHeader}
      style={{height:`calc(100vh - ${pageHeightLoss})`}}
    >
      <div className={styles.banner}>
        <HeroImages autoplayInteval={5000}
                    links={head.hero.images.split(',')}
                    title={head.hero.title}
                    random={true}
        />
      </div>
      <div className={styles.logo}>
      </div>
    </header>
  );

WelcomeHeader.propTypes = {
  scrollTo: React.PropTypes.string,
  head: PropTypes.object.isRequired,
  pageHeightLoss: React.PropTypes.string.isRequired
};

export default WelcomeHeader
