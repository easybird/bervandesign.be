import React, { PropTypes } from 'react';
import HeroImages from '../HeroImages';
import styles from './index.css';
import { Link } from 'react-scroll';

const WelcomeHeader = ({ scrollTo, isActive, head, pageHeightLoss }) => (
  <header
    className={styles.welcomeHeader}
    style={{ height: `calc(100vh - ${pageHeightLoss})` }}
  >
    <div className={styles.banner}>
      <HeroImages autoplayInteval={5000}
                  links={head.hero.images.split(',')}
                  title={head.hero.title}
                  height="70vh"
                  random={true}
      />
    </div>
    <div></div>
    <Link
      to={scrollTo}
      spy={true}
      smooth={true}
      offset={-70}
      duration={1000}
      onSetActive={isActive}
      className={styles.logo}
      style={{
        cursor: "pointer",
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <i className={`${styles.icon} material-icons md-36`}>
        keyboard_arrow_down
      </i>
    </Link>
  </header>
);

WelcomeHeader.propTypes = {
  scrollTo: React.PropTypes.string,
  isActive: React.PropTypes.func,
  head: PropTypes.object.isRequired,
  pageHeightLoss: React.PropTypes.string.isRequired
};

export default WelcomeHeader
