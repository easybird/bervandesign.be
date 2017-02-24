import React, { PropTypes } from 'react';
import HeroImages from '../HeroImages';
import styles from './index.css';

const WelcomeHeader = ({ head, pageHeightLoss }) => (
  <header
    className={styles.welcomeHeader}
    style={{ height: `calc(100vh - ${pageHeightLoss})` }}
  >
    <div className={styles.banner}>
      <HeroImages autoplayInteval={3000}
                  links={head.hero.images}
                  title={head.hero.title}
                  height="75vh"
                  random={true}
      />
    </div>
    <div style={{margin: "0 auto",
      cursor: "pointer",
      flexGrow: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textTransform: 'uppercase'
    }}>
      Deze vernieuwde website is nog in aanmaak
    </div>
  </header>
);

WelcomeHeader.propTypes = {
  head: PropTypes.object.isRequired,
  pageHeightLoss: React.PropTypes.string.isRequired
};

export default WelcomeHeader
