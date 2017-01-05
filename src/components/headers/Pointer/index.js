import React from 'react';
import { Link } from 'react-scroll';
import styles from './index.css';

class Pointer extends React.Component {
  constructor(props) {
    super(props);
    this.setInterval = this.setInterval.bind(this);
    this.state = {
      isVisible: true
    }
  }

  componentDidMount() {
    this.setInterval();
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  setInterval() {
    const interval = 1000;
    window.clearInterval(this.timer);
    this.interval = window.setInterval(
      () => {
        const changeVisibility = () => {
          this.setState({
            isVisible: !this.state.isVisible
          })
        };

        if (this.state.isVisible) {
          setTimeout(changeVisibility, 300);
        } else {
          changeVisibility();
        }
      }, interval);
  }

  render() {
    const { isActive, scrollTo } = this.props;
    const { isVisible } = this.state;

    return (
      <Link
        to={scrollTo}
        spy={true}
        smooth={true}
        offset={-70}
        duration={1000}
        onSetActive={isActive}
        className={styles.pointer}
        style={{
          cursor: "pointer",
          flexGrow: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div
          className={`${styles.pointerIcon} ${!isVisible ? styles.invisible : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg"
               width='54'
               height='54'
               viewBox="0 0 24 24"
          >
            <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"/>
          </svg>
        </div>
      </Link>
    )
  }
}

Pointer.propTypes = {
  scrollTo: React.PropTypes.string,
  isActive: React.PropTypes.func
};

export default Pointer;
