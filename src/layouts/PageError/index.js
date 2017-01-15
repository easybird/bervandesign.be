import React, { PropTypes } from 'react';
import NavBar from '../../components/headers/NavBar';
import styles from './index.css';
import bervanStyles from '../BervanHomepage/index.css';

const PageError = () => (
  <div
    className={ bervanStyles.bervanHomepage }
  >
      <NavBar
        height='56px'
      />
    <div className={styles.parent}>
      <div style={{ textTransform: 'uppercase', textAlign: 'center'}}>
        Onze nieuwe website is nog onder constructie. <br/> Later meer.
      </div>
    </div>
  </div>
)

PageError.propTypes = {
  error: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  errorText: PropTypes.string,
}

PageError.defaultProps = {
  error: 404,
  errorText: "Page Not Found",
}

export default PageError
