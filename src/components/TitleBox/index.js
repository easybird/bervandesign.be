import React from "react";
import styles from './index.css';

const TitleBox = ({ title }) => (
  <div
    className={styles.titleBox}
  >
    <div className={styles.title}>
      { title }
    </div>
  </div>
);

TitleBox.propTypes = {
  title: React.PropTypes.string.isRequired
};

export default TitleBox;
