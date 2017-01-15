import React, { PropTypes } from 'react';
import NavBar from '../../components/headers/NavBar';
import styles from './index.css';
import bervanStyles from '../BervanHomepage/index.css';

const PageError = ({ error, errorText }) => (
  <div
    className={ bervanStyles.bervanHomepage }
  >
      <NavBar
        height='56px'
      />
      <div className={ styles.container }>
        <div className={ styles.oops }>{ "Deze site is in opbouw" }</div>
        <div className={ styles.text }>
          <p className={ styles.title }>
            { " " }
          </p>
          {
            error === 404 &&
            <div>
              { "Het lijkt er op dat je een kapotte link vond. " }
              { "Sorry daarvoor. " }
              <br />
              { "Aarzel niet om deze pagina te rapporteren." }
            </div>
          }
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
