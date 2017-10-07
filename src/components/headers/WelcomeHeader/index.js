import React, { PropTypes } from "react";
import HeroImages from "../HeroImages";
import styles from "./index.css";

const WelcomeHeader = ({ head, pageHeightLoss }) => (
  <header
    className={styles.welcomeHeader}
    style={{ height: `calc(100vh - ${pageHeightLoss})` }}
  >
    <div className={styles.banner}>
      <HeroImages
        autoplayInteval={3000}
        links={head.hero.images}
        title={head.hero.title}
        height="75vh"
        random={true}
      />
    </div>
    <div
      style={{
        margin: "0 auto",
        display: "flex",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textTransform: "uppercase"
      }}
    >
      <div>
        <span className={styles.title}>Bervan Design bvba</span>
      </div>
      <div style={{}}>
        <span> Tenhovestraat 2a</span>
        <span>, Industriepark zuid zone D1, 8700 Tielt</span>
      </div>
      <div style={{}}>
        <span>Tel.: 051 40 47 86 - Email: info@bervandesign.be</span>
      </div>
    </div>
  </header>
);

WelcomeHeader.propTypes = {
  head: PropTypes.object.isRequired,
  pageHeightLoss: React.PropTypes.string.isRequired
};

export default WelcomeHeader;
