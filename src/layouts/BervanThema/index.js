import React from 'react';
import Metadata from '../../components/head/Metadata';
import NavBar from '../../components/headers/NavBar';
import { Element, Events } from 'react-scroll';
import styles from './index.css';
import ProjectContentPage from '../ProjectContentPage';

const documentFlow = ['header', 'content1', 'content2'];
const navBarHeight = '56px';

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
          height={navBarHeight}
        />
        <Element name={documentFlow[0]}>
          <ProjectContentPage
            pageHeightLoss={navBarHeight}
            images = { this.props.head.images }
            scrollTo={documentFlow[1]}
            isActive={() => this.setState({ activeDocument: 1 })}
          />
        </Element>
        <Element name={documentFlow[1]}>
          <ProjectContentPage
            pageHeightLoss={navBarHeight}
            images = { this.props.head.images }
            scrollTo={documentFlow[2]}
            isActive={() => this.setState({ activeDocument: 2 })}
          />
        </Element>
        <Element name={documentFlow[2]}>
          <ProjectContentPage
            pageHeightLoss={navBarHeight}
            images = { this.props.head.images }
            scrollTo={documentFlow[3]}
            isActive={() => this.setState({ activeDocument: 3 })}
          />
        </Element>
        <Element name={documentFlow[3]}>
          <ProjectContentPage
            pageHeightLoss={navBarHeight}
            images = { this.props.head.images }
            scrollTo={documentFlow[0]}
            isActive={() => this.setState({ activeDocument: 0 })}
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
