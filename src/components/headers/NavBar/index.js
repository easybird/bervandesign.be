import React from 'react';
import styles from './index.css';
import NavBarLinks from '../NavBarLinks';
import Logo from '../Logo';

class NavBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isVisible: false
    }
  }

  render() {
    const { isVisible } = this.state;
    const { height } = this.props;

    const logo =
      <Logo
        height={height}
        margin='1vh auto'
      />;

    return (
      <nav>
        <div
          className={styles.navBarFakeTop}
          style={{ minHeight: `calc(${height} + 2vh)` }}
        />
        <div className={styles.navBarWrapper}>
          <div className={styles.mobileWrapper}>
            <div className={`${styles.box} ${styles.leftPlaceholder}`}/>
            <div className={`${styles.box} ${styles.center}`}>
              {logo}
            </div>
            <div className={`${styles.box} ${styles.right}`}>
              <a
                href={undefined}
                onClick={() => this.setState({ isVisible: !isVisible })}
                className={styles.mobileNavBar}>

                <i className={`${styles.icon} material-icons md-36`}>
                  {isVisible ? 'clear' : 'view_headline'}
                </i>
              </a>
            </div>
          </div>
          <div className={styles.mobileWrapper}>
            <NavBarLinks
              isVisible={isVisible}
            />
          </div>
          <div className={styles.siteWrapper}>
            <div className={styles.box}>
              {logo}
            </div>
            <div className={styles.box}>
              <NavBarLinks
                isVisible={isVisible}
              />
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

NavBar.propTypes = {
  height: React.PropTypes.string.isRequired
}

export default NavBar;
