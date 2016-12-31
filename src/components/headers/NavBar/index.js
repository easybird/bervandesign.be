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

    return (
      <nav>
        <div className={styles.navBarFakeTop}></div>
        <div className={styles.navBarWrapper}>
          <div className={styles.mobileWrapper}>
            <div className={`${styles.box} ${styles.leftPlaceholder}`}/>
            <div className={`${styles.box} ${styles.center}`}>
              <Logo/>
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
              <Logo />
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

export default NavBar;
