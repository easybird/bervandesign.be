import React from 'react';
import Metadata from '../../components/head/Metadata';
import NavBar from '../../components/headers/NavBar';
import WelcomeHeader from '../../components/headers/WelcomeHeader';
import { Element, Events, scrollSpy, scroller } from 'react-scroll';
import styles from './index.css';

class BervanHomepage extends React.Component {

  constructor(props) {
    super(props);
    this.handleWheel = (event) => this._handleWheel(event);
    this.state = {
      isScrolling: false
    }
  }

  componentDidMount() {
    window.addEventListener('wheel', this.handleWheel, false);
    Events.scrollEvent.register('begin', function (to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function (to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();
  }

  _handleWheel(event) {
    // https://codepen.io/somethingkindawierd/post/react-mixin-scroll-lock
    this._cancelScrollEvent(event);
    if (this.state.isScrolling) return false;
    console.log('wheel!!!');
    this.setState({
      isScrolling: true
    });
    scroller.scrollTo('test', {
      duration: 1500,
      delay: 100,
      smooth: true
    });
  }

  _cancelScrollEvent(event) {
    event.stopImmediatePropagation();
    event.preventDefault();
    event.returnValue = false;
    return false;
  }

  componentWillUnmount() {
    window.removeEventListener('wheel', this.handleWheel);
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
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
      <div
        className={ styles.bervanHomepage }
      >
        <Metadata { ...this.props } />
        <NavBar
          height="56px"
          { ...this.props }
        />
        <WelcomeHeader
          pageHeightLoss="56px"
          scrollTo="test"
          { ...this.props }
        />
        <Element name="test">
          { content }
        </Element>
      </div>
    )
  }
}

BervanHomepage.propTypes = {};

export default BervanHomepage;
