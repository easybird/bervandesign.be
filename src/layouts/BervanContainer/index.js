import React from 'react';
import Metadata from '../../components/head/Metadata';
import { Element, Events } from 'react-scroll';
import styles from './index.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
const documentName = 'page';

class BervanContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isScrolling: false,
      activeDocument: 1,
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
        className={ styles.bervanContainer }
      >
        <Metadata { ...this.props } />
        <Header />
        <div className={styles.content}>
          { React.Children.toArray(this.props.children).map((child, index) => <Element key={index} name={`${documentName}${index+1}`}>{ child }</Element>) }
        </div>
        <Footer
          scrollTo={`${documentName}${[this.state.activeDocument === this.props.children.length ? 1 : this.state.activeDocument + 1]}`}
          hide={this.state.activeDocument === this.props.children.length || !this.state.pageTop}
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

BervanContainer.propTypes = {
  head: React.PropTypes.object.isRequired,
  children: React.PropTypes.oneOfType([React.PropTypes.array, React.PropTypes.object]).isRequired
};

export default BervanContainer;
