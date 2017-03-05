import React from 'react';
import cx from 'classnames';
import styles from './index.css';
const spark = (typeof window !== "undefined") ? require("./init-spark") : null;

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

    const pinContent =
      <SparkProxy.div
        className={styles.pinCont}
        proxyId="pin-cont"
      >

        <SparkScroll.section
          className={cx(styles.pin, pinnedStateClassNames)}
          proxy="pin-cont"
          timeline={{
            topTop: {
              onDown: () => this.setState({ pinPin: true }),
              onUp: () => this.setState({ pinPin: false })
            },
            bottomBottom: {
              onDown: () => this.setState({ pinUnpin: true }),
              onUp: () => this.setState({ pinUnpin: false })
            }
          }}>

          <SparkScroll.h3
            className={styles.pinTxt}
            proxy="pin-cont"
            timeline={{
              'topTop': { top: '0%', marginTop: '0px' },
              'topTop+50  ': { top: '50%', marginTop: '-60px' }
            }}>pin</SparkScroll.h3>

          <SparkScroll.div
            className={styles.reveal}
            proxy="pin-cont"
            timeline={{
              'topTop+100': { width: '0%', backgroundColor: '#5c832f' },
              'topTop+250': { width: ['100%', 'easeOutQuart'], backgroundColor: '#382513' }
            }}>
            <h3 className={styles.revealTxt}>reveal</h3>
          </SparkScroll.div>

          {/* with array notation we can apply bounce easing to just one property in a keyframe */ }
          <SparkScroll.div
            className={cx(styles.slide, { hide: this.state.slideHide })}
            proxy="pin-cont"
            timeline={{
              'topTop+250': {
                bottom: '100%',
                backgroundColor: '#5c832f',
                onDown: () => this.setState({ slideHide: false }),
                onUp: () => this.setState({ slideHide: true })
              },
              'topTop+400': { bottom: ['0%', 'easeOutBounce'], backgroundColor: '#284907' },
              'topTop+450': { backgroundColor: '#00a' },
              'topTop+500': { backgroundColor: '#a00' },
              'topTop+550': { backgroundColor: '#5c832f' }
            }}>

            {/* when we hit the appropriate scroll position, use onUp/onDown to change the
             text to 'slide' or 'color' depending on the scroll direction */}
            <SparkScroll.h3
              className={styles.slideTxt}
              proxy="pin-cont"
              timeline={{
                'topTop+400': {
                  onDown: () => this.setState({ text: 'color' }),
                  onUp: () => this.setState({ text: 'slide' })
                }
              }}>{this.state.text}</SparkScroll.h3>

            <SparkScroll.h3
              className={cx(styles.unpinTxt, { hide: this.state.unpinHide })}
              proxy="pin-cont"
              timeline={{
                'topTop+600': {
                  top: '100%',
                  onDown: () => this.setState({ unpinHide: false }),
                  onUp: () => this.setState({ unpinHide: true })
                },
                'bottomBottom': { top: '50%' }
              }}>unpin</SparkScroll.h3>
          </SparkScroll.div>

        </SparkScroll.section>

      </SparkProxy.div>

    const parallax =
      <a href="https://www.flickr.com/photos/rafagarcia_/15262287738/in/pool-83823859@N00/">
        <SparkProxy.div proxyId="parallax" className={styles.parallaxCont}>
          <div className={styles.parallaxShadow}></div>

          <SparkScroll.div
            className={styles.parallaxImg}
            proxy="parallax"
            timeline={{
              topBottom: { transform: 'translate3d(0px,0px,0px)' },
              bottomTop: { transform: 'translate3d(0px,-80px,0px)' }
            }}></SparkScroll.div>

          <SparkScroll.h3
            className={`${styles.parallaxTxt} ${styles.fade2}`}
            proxy="parallax"
            timeline={{
              topBottom: { transform: 'scale(0.8) translate3d(0px,120px,0px)' },
              bottomTop: { transform: 'scale(0.8) translate3d(0px,-120px,0px)' }
            }}>parallax</SparkScroll.h3>

          <SparkScroll.h3
            className={`${styles.parallaxTxt} ${styles.fade1}`}
            proxy="parallax"
            timeline={{
              topBottom: { transform: 'scale(0.9) translate3d(0px,160px,0px)' },
              bottomTop: { transform: 'scale(0.9) translate3d(0px,-160px,0px)' }
            }}>parallax</SparkScroll.h3>

          <SparkScroll.h3
            className={styles.parallaxTxt}
            proxy="parallax"
            timeline={{
              topBottom: { transform: 'translate3d(0px,200px,0px)' },
              bottomTop: { transform: 'translate3d(0px,-200px,0px)' }
            }}>parallax</SparkScroll.h3>
        </SparkProxy.div>
      </a>

    return (
      <div style={{
        minHeight: '5000px'
      }}>
        <div style={{ marginTop: '400px', display: 'block', height: '400px' }}>TEST</div>
        {/* fade */}
        <SparkScroll.h2
          timeline={{
            topBottom: { opacity: 0 },
            centerCenter: { opacity: 1 }
          }}>fade</SparkScroll.h2>

        {/* move */}
        <SparkScroll.h2
          timeline={{
            topBottom: { marginLeft: '-500px', opacity: 0 },
            centerCenter: { marginLeft: '0px', opacity: 1, ease: 'easeOutElastic' }
          }}>move</SparkScroll.h2>

        {/* spin */}
        <SparkProxy proxyId="rotate-proxy" />
        <SparkScroll.h2
          proxy="rotate-proxy"
          timeline={{
            topBottom: { rotation: '0' },
            topCenter: { rotation: '360' }
          }}>spin</SparkScroll.h2>

        {/* scale */}
        <SparkProxy proxyId="scale-proxy" />
        <SparkScroll.h2
          proxy="scale-proxy"
          timeline={{
            'topCenter-201': { scale: 0.01, opacity: 0 },
            'topCenter-200': { scale: 0.01, opacity: 1 },
            'topCenter+70': { scale: 1, ease: 'easeOutBounce' }
          }}>scale</SparkScroll.h2>

        {/* pin, reveal, slide, color, unpin */}
        {pinContent}

        <div className={styles.spacer50}></div>

        {/* parallax */}
        {parallax}

        <div className={styles.spacer50}></div>
      </div>
    );
  }

}

Test.propTypes = {};
export default Test;
