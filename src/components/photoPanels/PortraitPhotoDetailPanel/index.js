import React from 'react';
import styles from './index.css';

const PortraitPhotoDetailPanel = ({ details, openLightBox }) => {
  const imageCountStyle = details.length < 3 ? styles.imageCountTwo : styles.imageCountMore;
  const photoPanelStyle = details.length < 3 ? styles.photoPanelTwo : styles.photoPanelMore;

  const images = details.map((detail, index) => {
    return <div
      className={`${styles.image} ${imageCountStyle}`}
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
    <section className={`${styles.photos} ${photoPanelStyle}`}>
      {images}
    </section>
  )
};

PortraitPhotoDetailPanel.propTypes = {
  details: React.PropTypes.array.isRequired,
  openLightBox: React.PropTypes.func.isRequired
};

export default PortraitPhotoDetailPanel;

