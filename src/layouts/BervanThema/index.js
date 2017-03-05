import React from 'react';
import BervanContainer from '../BervanContainer';
import positioning from '../positioning.css';
import PortraitPhotoDetailPanel from '../../components/photoPanels/PortraitPhotoDetailPanel';
import LandscapePhotoDetailPanel from '../../components/photoPanels/LandscapePhotoDetailPanel';
import CombinationPhotoDetailPanel from '../../components/photoPanels/CombinationPhotoDetailPanel';

class BervanThema extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeChild: 0
    }
  }

  openLightBox = (projectRef) => {
    alert(`test ${projectRef}`);
  };

  render() {
    const projectContent = [];

    const addProjectContent = (child) => {
      let classNames;
      if (this.state.activeChild === projectContent.length) {
        classNames = `${positioning.fixedPanelOnTop} ${positioning.panel}`;
      } else if (this.state.activeChild + 1 === projectContent.length) {
        classNames = `${positioning.panel} ${positioning.relativePanel} ${positioning.nextPage}`;
      } else {
        classNames = `${positioning.panel} ${positioning.relativePanel}`
      }

      projectContent.push(
        <div className={classNames}
             key={projectContent.length}>
          <div className={positioning.page}>
            { child }
          </div>
        </div>
      )
    };

    addProjectContent(
      <PortraitPhotoDetailPanel
        details={[this.props.head.details[0], this.props.head.details[1]]}
        openLightBox={this.openLightBox}
      />
    );

    addProjectContent(
      <PortraitPhotoDetailPanel
        details={[this.props.head.details[0], this.props.head.details[1], this.props.head.details[1]]}
        openLightBox={this.openLightBox}
      />
    );

    addProjectContent(
      <LandscapePhotoDetailPanel
        details={[this.props.head.details[2], this.props.head.details[3], this.props.head.details[4], this.props.head.details[7]]}
        openLightBox={this.openLightBox}
      />
    );

    addProjectContent(
      <CombinationPhotoDetailPanel
        details={[this.props.head.details[0], this.props.head.details[1], this.props.head.details[4], this.props.head.details[7]]}
        openLightBox={this.openLightBox}
      />
    );

    return (
      <BervanContainer {...this.props }>
        {projectContent}
      </BervanContainer>
    )
  }
}

BervanThema.propTypes = {
  head: React.PropTypes.object.isRequired
};

export default BervanThema;
