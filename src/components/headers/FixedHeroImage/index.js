import React, { Component } from 'react';
import styles from './index.css';

export default class FixedHeroImage extends Component {
  constructor(props) {
    super(props);

    const max = props.links.length;
    const min = 0;

    var slide = this.props.random ? Math.floor(Math.random() * (max - min)) + min : 0;
    this.state = {
      slide,
      dragging: null,
      sliding: false,
      offset: 0
    };
    this.setTimer = this.setTimer.bind(this);
  }

  componentDidMount() {
    this.setTimer();
  }

  componentWillUnmount() {
    window.clearInterval(this.timer);
  }

  setTimer() {
    const interval = this.props.autoplayInteval;
    if (this.props.links.length > 1 && interval && interval > 0) {
      window.clearInterval(this.timer);
      this.timer = window.setInterval(
        this.changeSlide.bind(
          this,
          this.state.slide === this.props.links.length - 1 ? 0 : this.state.slide + 1)
        , interval
      );
    }
  }

  changeSlide(slide) {
    if (document.hidden) return; // run only when page is visible
    if (slide <= this.props.links.length) {
      this.setState({ slide, sliding: true, dragging: null }, this.setTimer);
    }
  }

  render() {
    const { slide } = this.state;
    const { title, height } = this.props;

    const li = this.props.links.map(
      (link, index) => {
        if (slide !== index) return <li key={index} style={{ display: 'none' }}></li>
        return <li
          key={index}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.6)), url(${link})`,
            width: '100%',
            position: 'fixed',
            display: 'block',
            height: height,
            zIndex: -1
          }}
          className={`${styles.slide} ${slide == index ? styles.visible : styles.invisible}`}
        >
        </li>
      }
    );

    return (
      <div
        className={styles.flexslider}
        style={{height: height, background: 'transparent'}}
      >
        <ul
          className={styles.slides}
        >
          {li}
        </ul>
        <div className={styles.heroTextBox}>
          <h1>{title}</h1>
        </div>
      </div>
    );
  }
}

FixedHeroImage.propTypes = {
  title: React.PropTypes.string,
  random: React.PropTypes.bool,
  links: React.PropTypes.array.isRequired,
  height: React.PropTypes.string.isRequired,
  autoplayInteval: React.PropTypes.number.isRequired
};
