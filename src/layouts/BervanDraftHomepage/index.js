import React from 'react';
import Metadata from '../../components/head/Metadata';
import { Element, Events } from 'react-scroll';
import styles from './index.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import WelcomeHeader from '../../components/headers/WelcomeHeader';
import BervanContentPage from '../BervanContentPage';
const documentFlow = ['page1', 'page2'];

class BervanDraftHomepage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isScrolling: false,
      activeDocument: 0,
      pageTop: true
    };
  }

  componentDidMount() {
    const handleScroll = this.handleScroll.bind(this);
    window.addEventListener('keydown', handleScroll, true);
    window.addEventListener('wheel', handleScroll, true);
    window.addEventListener('touchstart', handleScroll, true);

    // https://github.com/brigade/react-waypoint ==> to lazy load stuff
    Events.scrollEvent.register('begin', () => {
      this.setState({
        isScrolling: true
      });
    });

    Events.scrollEvent.register('end', () => {
      this.setState({
        activeDocument: this.state.activeDocument + 1,
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
        <Header />
        <div className={styles.content}>
          <div className={`${styles.page} ${styles.panels}`}>
            <Element name={documentFlow[0]}>
              <WelcomeHeader
                { ...this.props }
              />
            </Element>
          </div>
          <div className={`${styles.panels} ${styles.next}`}>
            <Element name={documentFlow[1]}>
              <BervanContentPage
                themes={ this.props.head.themes }
              />
            </Element>
          </div>
        </div>
        <Footer
          scrollTo={documentFlow[this.state.activeDocument === documentFlow.length - 1 ? 0 : this.state.activeDocument + 1]}
          hide={this.state.activeDocument === 1 || !this.state.pageTop}
        />
      </div>
    )
  }

  handleScroll() {
    if (this.state.pageTop) {
      this.setState({ pageTop: false })
    }
  }
}

BervanDraftHomepage.propTypes = {
  head: React.PropTypes.object.isRequired
};

export default BervanDraftHomepage;
