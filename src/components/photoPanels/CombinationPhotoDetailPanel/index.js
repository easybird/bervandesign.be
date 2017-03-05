import React from 'react';
import styles from './index.css';

const CombinationPhotoDetailPanel = ({ details, openLightBox }) => {
  const landscapeImages = details
    .filter((detail) => detail.position === 'LANDSCAPE')
    .map((detail, index) => {
      return <div
        className={`${styles.image} ${styles.maxTwo}`}
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

  const portraitImages = details
    .filter((detail) => detail.position === 'PORTRAIT')
    .map((detail, index) => {
      return <div
        className={`${styles.image} ${styles.maxTwo}`}
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

  const landscapeDiv = <div className={styles.landscapeDiv}>{landscapeImages}</div>;
  const portraitDiv = <div className={styles.portraitDiv}>{portraitImages}</div>;

  return (
    <section className={`${styles.photos} ${styles.photoPanelMore}`}>
      {landscapeDiv}
      {portraitDiv}
    </section>
  )
};

CombinationPhotoDetailPanel.propTypes = {
  details: React.PropTypes.array.isRequired,
  openLightBox: React.PropTypes.func.isRequired
};

export default CombinationPhotoDetailPanel;

