import React, { PropTypes } from 'react';
import styles from './index.css';
import Pointer from '../../components/headers/Pointer';
import PhotoGrid from '../../components/PhotoGrid';
import TitleBox from '../../components/TitleBox';

const ProjectContentPage = ({ project, scrollTo, isActive, pageHeightLoss }) => (
  <div
    className={styles.contentPage}
    style={{ height: `calc(100vh - ${pageHeightLoss})` }}
  >
    {project.title &&
    <TitleBox
      title={project.title}
    />}
    <div className={styles.content}>
      <PhotoGrid images={project.images}/>
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
  project: PropTypes.object.isRequired,
  pageHeightLoss: React.PropTypes.string.isRequired,
};

export default ProjectContentPage;
