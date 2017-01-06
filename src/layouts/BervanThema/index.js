import React from 'react';
import Metadata from '../../components/head/Metadata';
import NavBar from '../../components/headers/NavBar';
import { Element, Events } from 'react-scroll';
import styles from './index.css';
import ProjectContentPage from '../ProjectContentPage';

const navBarHeight = '56px';
const randomDocumentName = Math.random().toString(36).substring(8);

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

    const projectContent = this.props.head.projects.map((project, index) => {
        const nextElementIndex = index + 1;
        const documentName = randomDocumentName + index;
        const nextDocumentName = this.props.head.projects.length === nextElementIndex ? randomDocumentName + 0 : randomDocumentName + nextElementIndex;
        return <Element
          key={index}
          name={documentName}
        >
          <ProjectContentPage
            project={project}
            pageHeightLoss={navBarHeight}
            scrollTo={nextDocumentName}
            isActive={() => this.setState({ activeDocument: nextElementIndex })}
          />
        </Element>
      }
    );


    return (
      <div
        className={ styles.bervanHomepage }
      >
        <Metadata { ...this.props } />
        <NavBar
          height={navBarHeight}
        />
        {projectContent}
      </div>
    )
  }
}

BervanHomepage.propTypes = {
  head: React.PropTypes.object.isRequired
};

export default BervanHomepage;
