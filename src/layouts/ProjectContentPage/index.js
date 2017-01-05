import React, { PropTypes } from 'react';
import styles from './index.css';
import Pointer from '../../components/headers/Pointer';
import PhotoGrid from '../../components/PhotoGrid';

const ProjectContentPage = ({ images, scrollTo, isActive, pageHeightLoss }) => (
  <div
    className={styles.contentPage}
    style={{ height: `calc(100vh - ${pageHeightLoss})` }}
  >
    <div className={styles.content}>
      <PhotoGrid images={images}/>
    </div>
    <Pointer
      scrollTo={scrollTo}
      isActive={isActive}
    />
  </div>
);

ProjectContentPage.propTypes = {
  scrollTo: React.PropTypes.string,
  isActive: React.PropTypes.func,
  images: PropTypes.array.isRequired,
  pageHeightLoss: React.PropTypes.string.isRequired,
};

export default ProjectContentPage;
