import React, { PropTypes } from 'react';
import styles from './index.css';
import PhotoGrid from '../../components/PhotoGrid';
import TitleBox from '../../components/TitleBox';

const ProjectContentPage = ({ project }) => (
  <div
    className={styles.contentPage}
  >
    {project.title &&
    <TitleBox
      title={project.title}
    />}
    <div className={styles.content}>
      <PhotoGrid images={project.images}/>
    </div>
  </div>
);

ProjectContentPage.propTypes = {
  isActive: React.PropTypes.func,
  project: PropTypes.object.isRequired,
};

export default ProjectContentPage;
