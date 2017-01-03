import React from 'react';
import Metadata from '../../components/head/Metadata';
import NavBar from '../../components/headers/NavBar';
import WelcomeHeader from '../../components/headers/WelcomeHeader';
import { Element, Events, scroller } from 'react-scroll';
import styles from './index.css';

const documentFlow = ['header', 'content1', 'content2'];

class BervanHomepage extends React.Component {

  constructor(props) {
    super(props);
    this.handleWheel = (event) => this._handleWheel(event);
    this.handleTouch = (event, ts) => this._handleTouch(event, ts);
    this.handleKeyDown = (event) => this._handleKeyDown(event);
    this.scrollTo = (divName) => this._scrollTo(divName);
    this.scrollUp = (event) => this._scrollUp(event);
    this.scrollDown = (event) => this._scrollDown(event);
    this.cancelEvent = (event) => this._cancelEvent(event);
    this.state = {
      isScrolling: false,
      activeDocument: 0
    }
  }

  componentDidMount() {
    let ts;
    // https://github.com/brigade/react-waypoint ==> to lazy load stuff
    window.addEventListener('keydown', this.handleKeyDown, true);
    window.addEventListener('wheel', this.handleWheel, true);
    window.addEventListener('touchstart', (event) => {
      ts = event.touches[0].clientY
    }, true);
    window.addEventListener('touchmove', (event) => this.handleTouch(event, ts), true);
    Events.scrollEvent.register('begin', () => {
      this.setState({
        isScrolling: true
      });
    });

    Events.scrollEvent.register('end', () => {
      this.setState({
        activeDocument: typeof this.state.nextDocument !== 'undefined' ? this.state.nextDocument : this.state.activeDocument,
        nextDocument: undefined,
        isScrolling: false
      });
    });
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    window.removeEventListener('wheel', this.handleWheel);
    window.removeEventListener('touchmove', this.handleTouch);
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  _handleTouch(event, ts) {
    if (ts > event.touches[0].clientY) {
      return this.scrollDown(event);
    }
    return this.scrollUp(event);
  }

  _handleWheel(event) {
    if (event.deltaY > 0) {
      return this.scrollDown(event);
    }
    return this.scrollUp(event);
  }

  _handleKeyDown(event) {
    if (event.key && event.key === 'ArrowDown') {
      this.scrollDown(event);
      return;
    }

    // for old browsers not implementing event.key
    if (event.keyCode === 40) {
      this.scrollDown(event);
      return;
    }

    if (event.key && event.key === 'ArrowUp') {
      this.scrollUp(event);
      return;
    }

    // for old browsers not implementing event.key
    if (event.keyCode === 38) {
      this.scrollUp(event);
      return;
    }
  }

  _scrollUp(event) {
    this.cancelEvent(event);
    if (this.state.activeDocument === 0) return;
    this.scrollTo(--this.state.activeDocument);
  }

  _scrollDown(event) {
    this.cancelEvent(event);
    this.scrollTo(this.state.activeDocument === documentFlow.length - 1 ? 0 : ++this.state.activeDocument);
  }

  _scrollTo(nextDocument) {
    if (this.state.isScrolling) return false;
    scroller.scrollTo(documentFlow[nextDocument], {
      duration: 1500,
      delay: 0,
      offset: -75,
      smooth: true
    });
    this.setState({
      nextDocument
    });
  }

  _cancelEvent(event) {
    event.stopImmediatePropagation();
    event.preventDefault();
    event.returnValue = false;
    return false;
  }

  render() {
    const content = [];
    for (let i = 0; i < 1000; i++) {
      content.push(
        <div key={i}>
          hier komt content: {i}
          <br/>
        </div>
      )
    }

    return (
      // TODO parallax way of scrolling: react-track -> react-spark-scroll
      <div
        className={ styles.bervanHomepage }
      >
        <Metadata { ...this.props } />
        <NavBar
          height="56px"
          { ...this.props }
        />
        <Element name={documentFlow[0]}>
          <WelcomeHeader
            pageHeightLoss="56px"
            scrollTo={documentFlow[1]}
            isActive={() => this.setState({ activeDocument: 1 })}
            { ...this.props }
          />
        </Element>
        <Element name={documentFlow[1]}>
          { content }
        </Element>
        <Element name={documentFlow[2]}>
          { content }
        </Element>
      </div>
    )
  }
}

BervanHomepage.propTypes = {};

export default BervanHomepage;
