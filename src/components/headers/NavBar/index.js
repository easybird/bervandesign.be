import React from "react";
import styles from "./index.css";
import NavBarLinks from "../NavBarLinks";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false
    };
  }

  render() {
    const { isVisible } = this.state;
    const { height } = this.props;

    const logo = <span className={styles.logo}>Bervan design</span>;
    const title = <span>Creatief maatwerk</span>;

    const mobileBar = (
      <div className={styles.mobileWrapper}>
        <span className={styles.topText}>
          {logo}
          {title}
        </span>
        {/* <div className={`${styles.right}`}>
          <a
            href={undefined}
            onClick={() => this.setState({ isVisible: !isVisible })}
            className={styles.mobileNavBar}>

            <i className={`${styles.icon} material-icons md-36`}>
              {isVisible ?
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
                  <path
                    d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                </svg> :
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
                  <path d="M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z"/>
                </svg>
              }
            </i>
          </a>
        </div> */}
      </div>
    );

    const mobileBarLinks = (
      <div className={styles.mobileBarLinksWrapper}>
        <NavBarLinks isVisible={isVisible} />
      </div>
    );

    return (
      <nav>
        <div
          className={styles.navBarFakeTop}
          style={{ height: `calc(${height})` }}
        />
        <div
          className={styles.navBarWrapper}
          style={{ height: `calc(${height})` }}
        >
          {mobileBar}
          {mobileBarLinks}
          <div className={styles.siteWrapper}>
            <span className={styles.topText}>
              {logo}
              {title}
            </span>
            <div className={`${styles.right}`}>
              <NavBarLinks isVisible={isVisible} />
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

NavBar.propTypes = {
  height: React.PropTypes.string.isRequired
};

export default NavBar;
