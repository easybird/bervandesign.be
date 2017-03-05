import React from 'react';
import positioning from '../positioning.css';
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
        <div className={`${positioning.fixedPanelOnTop} ${positioning.panel}`}>
          <WelcomeHeader
            { ...this.props }
          />
        </div>
        <div className={`${positioning.panel} ${positioning.relativePanel} ${positioning.nextPage}`}>
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
