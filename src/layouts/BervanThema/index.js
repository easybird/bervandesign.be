import React from 'react';
import BervanContainer from '../BervanContainer';
import cx from 'classnames';
import sparkLayout from '../Spark/sparkLayout.css';
import positioning from '../positioning.css';
import PortraitPhotoDetailPanel from '../../components/photoPanels/PortraitPhotoDetailPanel';
import LandscapePhotoDetailPanel from '../../components/photoPanels/LandscapePhotoDetailPanel';
import CombinationPhotoDetailPanel from '../../components/photoPanels/CombinationPhotoDetailPanel';

const spark = (typeof window !== "undefined")
  ? require("../Spark/init-spark")
  : null;

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

  renderWithoutJs({ photoDetailPanel1, photoDetailPanel2, photoDetailPanel3, photoDetailPanel4 }) {
    const projectContent = [];

    const addProjectContent = (child) => {
      let classNames = `${positioning.panel} ${positioning.relativePanel}`

      projectContent.push(
        <div className={classNames}
             key={projectContent.length}>
          <div className={positioning.page}>
            { child }
          </div>
        </div>
      )
    };

    addProjectContent(photoDetailPanel1);
    addProjectContent(photoDetailPanel2);
    addProjectContent(photoDetailPanel3);
    addProjectContent(photoDetailPanel4);

    return (
      <BervanContainer {...this.props }>
        {projectContent}
      </BervanContainer>
    )
  }

  renderWithoutSpark({ photoDetailPanel1, photoDetailPanel2, photoDetailPanel3, photoDetailPanel4 }) {
    const { SparkScroll, SparkProxy } = spark;

    const pinnedStateClassNames = {};
    pinnedStateClassNames[sparkLayout.pinPin] = true;

    return (
      <BervanContainer {...this.props }>

        <div style={{
          minHeight: '3200px'
        }}>
          <SparkProxy.div className={sparkLayout.pinnedContent} proxyId="pin-cont">
            <SparkScroll.section
              className={cx(positioning.fixedPanelOnTop)}
              proxy="pin-cont"
            >
              <SparkScroll.div className={cx(sparkLayout.pinPhotoPanel, positioning.panel)}
                               proxy="pin-cont"
                               timeline={{
                                 topTop: {
                                   top: '0%',
                                 }
                               }}
              >
                {photoDetailPanel1}
              </SparkScroll.div>
              <SparkScroll.div className={cx(sparkLayout.revealPhotoPanel, positioning.panel)}
                               proxy="pin-cont"
                               timeline={{
                                 'topTop+0': {
                                   top: '100%',
                                 },
                                 'topTop+850': {
                                   top: [
                                     '0%', 'easeOutQuart'
                                   ],
                                 }
                               }}>
                {photoDetailPanel2}
              </SparkScroll.div>

              <SparkScroll.div className={cx(sparkLayout.revealPhotoPanel, positioning.panel)}
                               proxy="pin-cont"
                               timeline={{
                                 'topTop+870': {
                                   top: '100%',
                                 },
                                 'topTop+1220': {
                                   top: [
                                     '0%', 'easeOutQuart'
                                   ]
                                 }
                               }}>
                {photoDetailPanel3}
              </SparkScroll.div>
              <SparkScroll.div className={cx(sparkLayout.revealPhotoPanel, positioning.panel)}
                               proxy="pin-cont"
                               timeline={{
                                 'topTop+1250': {
                                   top: '100%'
                                 },
                                 'topTop+2100': {
                                   top: [
                                     '0%', 'easeOutQuart'
                                   ],
                                 }
                               }}>
                {photoDetailPanel4}
              </SparkScroll.div>

            </SparkScroll.section>
          </SparkProxy.div>
        </div>
      </BervanContainer>)
  }

  render() {
    const photoDetailPanel1 = <PortraitPhotoDetailPanel
      details={[this.props.head.details[0], this.props.head.details[1]]}
      openLightBox={this.openLightBox}
    />;

    const photoDetailPanel2 = <PortraitPhotoDetailPanel
      details={[this.props.head.details[0], this.props.head.details[1], this.props.head.details[1]]}
      openLightBox={this.openLightBox}
    />;

    const photoDetailPanel3 = <LandscapePhotoDetailPanel
      details={[this.props.head.details[2], this.props.head.details[3], this.props.head.details[4], this.props.head.details[7]]}
      openLightBox={this.openLightBox}
    />;

    const photoDetailPanel4 = <CombinationPhotoDetailPanel
      details={[this.props.head.details[0], this.props.head.details[1], this.props.head.details[4], this.props.head.details[7]]}
      openLightBox={this.openLightBox}
    />;

    if (!spark) {
    return this.renderWithoutJs({ photoDetailPanel1, photoDetailPanel2, photoDetailPanel3, photoDetailPanel4 });
    } else {
      return this.renderWithoutSpark({
        photoDetailPanel1,
        photoDetailPanel2,
        photoDetailPanel3,
        photoDetailPanel4
      });
    }
  }
}

BervanThema.propTypes = {
  head: React.PropTypes.object.isRequired
};

export default BervanThema;
