import React from 'react';
import styles from './index.css';

const LandscapePhotoDetailPanel = ({ details, openLightBox }) => {
  const images = details.map((detail, index) => {
    return <div
      className={`${styles.image} ${styles.imageCountMore}`}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${detail.src})`,
      }}
      key={index}
    >
      <a href={detail.src}
         key={index}
         onClick={(e) => {
           e.preventDefault();
           openLightBox(detail.projectRef)
         }}
      >
        <span className={styles.emptySpan}></span>
      </a>
    </div>
  });
  return (
    <section className={`${styles.photos} ${styles.photoPanelMore}`}>
      {images}
    </section>
  )
};

LandscapePhotoDetailPanel.propTypes = {
  details: React.PropTypes.array.isRequired,
  openLightBox: React.PropTypes.func.isRequired
};

export default LandscapePhotoDetailPanel;

