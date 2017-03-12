import React from 'react';
import cx from 'classnames';
import styles from './index.css';
import PortraitPhotoDetailPanel from '../../components/photoPanels/PortraitPhotoDetailPanel';
import LandscapePhotoDetailPanel from '../../components/photoPanels/LandscapePhotoDetailPanel';
import CombinationPhotoDetailPanel from '../../components/photoPanels/CombinationPhotoDetailPanel';

const spark = (typeof window !== "undefined")
  ? require("./../Spark/init-spark")
  : null;

class Test extends React.PureComponent {
  // https://github.com/gilbox/react-spark-scroll/tree/master/examples
  constructor(props) {
    super(props);
    this.state = {
      actionType: null,
      text: 'slide',
      unpinHide: true,
      slideHide: true,
      pinPin: false,
      pinUnpin: false
    };
  }

  render() {
    if (!spark) {
      return <div>EMPTY</div>
    }
    const { SparkScroll, SparkProxy } = spark;
    const pinnedStateClassNames = {};
    pinnedStateClassNames[styles.pinPin] = this.state.pinPin;
    pinnedStateClassNames[styles.pinUnpin] = this.state.pinUnpin;

    return (
      <div style={{
        minHeight: '2500px'
      }}>

        <SparkProxy.div className={styles.pinCont} proxyId="pin-cont">
          <SparkScroll.section className={cx(styles.pin, pinnedStateClassNames)}
                               proxy="pin-cont"
                               timeline={{
                                 topTop: {
                                   onDown: () => this.setState({ pinPin: true }),
                                   onUp: () => this.setState({ pinPin: false }),
                                   log: 'topTop section'
                                 }
                               }}
          >
            <SparkScroll.div className={styles.pinPhotoPanel}
                             proxy="pin-cont"
                             timeline={{
                               topTop: {
                                 top: '0%',
                                 marginTop: '0px',
                                 log: 'topTop pinText'
                               }
                             }}
            >
              <PortraitPhotoDetailPanel
                details={[this.props.head.details[0], this.props.head.details[1]]}
                openLightBox={this.openLightBox}

              />
            </SparkScroll.div>

            <SparkScroll.div className={styles.reveal}
                             proxy="pin-cont"
                             timeline={{
                               'topTop+0': {
                                 width: '0%',
                               },
                               'topTop+350': {
                                 width: [
                                   '100%', 'easeOutQuart'
                                 ],
                               }
                             }}>
              <PortraitPhotoDetailPanel
                details={[this.props.head.details[0], this.props.head.details[1], this.props.head.details[1]]}
                openLightBox={this.openLightBox}
              />
            </SparkScroll.div>

            <SparkScroll.div className={cx(styles.slide, { hide: this.state.slideHide })}
                             proxy="pin-cont"
                             timeline={{
                               'topTop+370': {
                                 bottom: '100%',
                                 backgroundColor: '#5c832f',
                                 onDown: () => this.setState({ slideHide: false }),
                                 onUp: () => this.setState({ slideHide: true })
                               },
                               'topTop+720': {
                                 bottom: [
                                   '0%', 'easeOutQuart'
                                 ]
                               }
                             }}>

              <LandscapePhotoDetailPanel
                details={[this.props.head.details[2], this.props.head.details[3], this.props.head.details[4], this.props.head.details[7]]}
                openLightBox={this.openLightBox}
              />
            </SparkScroll.div>

            <SparkScroll.div className={styles.reveal}
                             proxy="pin-cont"
                             timeline={{
                               'topTop+720': {
                                 left: '100%'
                               },
                               'topTop+1000': {
                                 left: [
                                   '0%', 'easeOutQuart'
                                 ],
                               }
                             }}>
              <CombinationPhotoDetailPanel
                details={[this.props.head.details[0], this.props.head.details[1], this.props.head.details[4], this.props.head.details[7]]}
                openLightBox={this.openLightBox}
              />
            </SparkScroll.div>

          </SparkScroll.section>

        </SparkProxy.div>

      </div>
    )
      ;
  }
}

Test.propTypes = {
  head: React.PropTypes.object.isRequired
};
export default Test;
