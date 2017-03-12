/* eslint-disable */

import React from 'react';
import cx from 'classnames';
import styles from './index.css';
import PortraitPhotoDetailPanel from '../../components/photoPanels/PortraitPhotoDetailPanel';

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
    const { SparkScroll, SparkProxy, sparkScrollFactory } = spark;
    SparkScroll['PortraitPhotoDetailPanel'] = sparkScrollFactory(PortraitPhotoDetailPanel);

    const pinnedStateClassNames = {};
    pinnedStateClassNames[styles.pinPin] = this.state.pinPin;
    pinnedStateClassNames[styles.pinUnpin] = this.state.pinUnpin;

    return (
      <div style={{
        minHeight: '5000px'
      }}>

        <SparkProxy.div className={styles.pinCont} proxyId="pin-cont">

          <SparkScroll.section className={cx(styles.pin, pinnedStateClassNames)}
                               proxy="pin-cont"
                               timeline={{
                                 topTop: {
                                   onDown: () => this.setState({ pinPin: true }),
                                   onUp: () => this.setState({ pinPin: false }),
                                   log: 'topTop section'
                                 },
                                 bottomBottom: {
                                   onDown: () => this.setState({ pinUnpin: true }),
                                   onUp: () => this.setState({ pinUnpin: false }),
                                   log: 'bottomBottom section'
                                 }
                               }}
          >
            <SparkScroll.div className={styles.pinTxt}
                             proxy="pin-cont"
                             timeline={{
                               topTop: {
                                 top: '-10%',
                                 marginTop: '0px',
                                 log: 'topTop pinText'
                               },
                               centerCenter: {
                                 log: 'centerCenter pinText'
                               },
                               'topTop+40': {
                                 backgroundColor: '#00a'
                               },
                               'topTop+100': {
                                 backgroundColor: '#a00'
                               },
                               30: {
                                 color: 'red',
                                 'onUp': (e) => console.log('going up!'),
                                 'onDown': (e) => console.log('going down!'),
                                 log: '30 pinText'
                               },
                               'topTop+50': {
                                 top: '50%',
                                 marginTop: '-60px',
                                 log: 'topTop+50 pinText'
                               }
                             }}
            >
              <PortraitPhotoDetailPanel
                details={[this.props.head.details[0], this.props.head.details[1]]}
                openLightBox={this.openLightBox}

              />
            </SparkScroll.div>

            <SparkScroll.div className={styles.reveal} proxy="pin-cont"
                             timeline={{
                               'topTop+100': {
                                 width: '0%',
                                 backgroundColor: '#5c832f'
                               },
                               'topTop+250': {
                                 width: [
                                   '100%', 'easeOutQuart'
                                 ],
                                 backgroundColor: '#382513'
                               }
                             }}>
              <h3 className={styles.revealTxt}>reveal</h3>
            </SparkScroll.div>

            {/* with array notation we can apply bounce easing to just one property in a keyframe */}
            <SparkScroll.div className={cx(styles.slide, { hide: this.state.slideHide })} proxy="pin-cont"
                             timeline={{
                               'topTop+250': {
                                 bottom: '100%',
                                 backgroundColor: '#5c832f',
                                 onDown: () => this.setState({ slideHide: false }),
                                 onUp: () => this.setState({ slideHide: true })
                               },
                               'topTop+400': {
                                 bottom: [
                                   '0%', 'easeOutBounce'
                                 ],
                                 backgroundColor: '#284907'
                               },
                               'topTop+450': {
                                 backgroundColor: '#00a'
                               },
                               'topTop+500': {
                                 backgroundColor: '#a00'
                               },
                               'topTop+550': {
                                 backgroundColor: '#5c832f'
                               }
                             }}>

              {/* when we hit the appropriate scroll position, use onUp/onDown to change the
               text to 'slide' or 'color' depending on the scroll direction */}
              <SparkScroll.h3 className={styles.slideTxt} proxy="pin-cont" timeline={{
                'topTop+400': {
                  onDown: () => this.setState({ text: 'color' }),
                  onUp: () => this.setState({ text: 'slide' })
                }
              }}>{this.state.text}</SparkScroll.h3>

              <SparkScroll.h3 className={cx(styles.unpinTxt, { hide: this.state.unpinHide })} proxy="pin-cont"
                              timeline={{
                                'topTop+600': {
                                  top: '100%',
                                  onDown: () => this.setState({ unpinHide: false }),
                                  onUp: () => this.setState({ unpinHide: true })
                                },
                                'bottomBottom': {
                                  top: '50%'
                                }
                              }}>unpin</SparkScroll.h3>
            </SparkScroll.div>

          </SparkScroll.section>

        </SparkProxy.div>

      </div>
    )
      ;
  }

}

Test.propTypes = {};
export default Test;
