import React from 'react';
import styles from './index.css';
import WelcomeHeader from '../../components/headers/WelcomeHeader';
import BervanContentPage from '../BervanContentPage';
import BervanContainer from '../BervanContainer';

class BervanHomepage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BervanContainer {...this.props }>
        <div className={`${styles.page} ${styles.panels}`}>
          <WelcomeHeader
            { ...this.props }
          />
        </div>
        <div className={`${styles.panels} ${styles.next}`}>
          <BervanContentPage
            themes={ this.props.head.themes }
          />
        </div>
      </BervanContainer>
    )
  }
}

BervanHomepage.propTypes = {
  head: React.PropTypes.object.isRequired
};

export default BervanHomepage;
