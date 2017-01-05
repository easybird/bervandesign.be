import React from 'react';
import styles from './index.css';
import { Link } from 'react-router';

const ImageBlock = ({ url, title, link }) => (
  <figure
    className={styles.image}
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${url})`
    }}
  >
    <Link to={link}>
      <span className={styles.emptySpan}></span>
    </Link>
    <figcaption>
      {title}
    </figcaption>
  </figure>
);

ImageBlock.propTypes = {
  url: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  link: React.PropTypes.string.isRequired
};

export default ImageBlock;
