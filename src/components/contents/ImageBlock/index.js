import React from 'react';
import styles from './index.css';
import { Link } from 'react-router';

const ImageBlock = ({ url, title, link, color, position }) => (
  <figure
    className={styles.image}
    style={{ backgroundImage: `url(${url})` }}
  >
    <Link to={link}>
      <span className={styles.emptySpan}></span>
    </Link>;
    <figcaption
      style={position === 'right' ? {textAlign: 'right', left: 'inherit', right: '7%'} : {}}
    >{title}
    </figcaption>
  </figure>
);

ImageBlock.propTypes = {
  url: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  link: React.PropTypes.string.isRequired,
  position: React.PropTypes.string.isRequired
};

export default ImageBlock;
