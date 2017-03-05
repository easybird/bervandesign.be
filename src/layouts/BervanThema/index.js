import React from 'react';
import BervanContainer from '../BervanContainer';
import positioning from '../positioning.css';
import PhotoPanel from '../../components/PhotoPanel';
import PortraitPhotoDetailPanel from '../../components/PortraitPhotoDetailPanel';

class BervanThema extends React.Component {

  constructor(props) {
    super(props);
  }

  openLightBox = (projectRef) => {
    alert(`test ${projectRef}`);
  };

  render() {
    const projectContent = [];

    const addProjectContent = (child) => {
      const classNames = projectContent.length === 0 ? `${positioning.fixedPanelOnTop} ${positioning.panel}`
        : `${positioning.panel} ${positioning.relativePanel} ${positioning.nextPage}`;

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

    this.props.head.projects.map((project) => {
      addProjectContent(
        <PhotoPanel
          images={project.images}
        />
      );
    });

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
