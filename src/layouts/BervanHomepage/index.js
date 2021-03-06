import React from 'react';
import Metadata from '../../components/head/Metadata';
import NavBar from '../../components/headers/NavBar';
import WelcomeHeader from '../../components/headers/WelcomeHeader';
import { Element, Events } from 'react-scroll';
import styles from './index.css';

const documentFlow = ['header', 'content1', 'content2'];
const navBarHeight = '3em';

class BervanHomepage extends React.Component {

  constructor(props) {
    super(props);
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
    // https://github.com/brigade/react-waypoint ==> to lazy load stuff
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
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  render() {
    return (
      <div
        className={ styles.bervanHomepage }
      >
        <Metadata { ...this.props } />
        <NavBar
          height={navBarHeight}
        />
        <Element name={documentFlow[0]}>
          <WelcomeHeader
            pageHeightLoss={navBarHeight}
            { ...this.props }
          />
        </Element>
      </div>
    )
  }
}

BervanHomepage.propTypes = {
  head: React.PropTypes.object.isRequired
};

export default BervanHomepage;
