import React, { PropTypes } from 'react';
import styles from './index.css';
import ImageBlock from '../../components/contents/ImageBlock';

const BervanContentPage = ({ themes }) => {
  const contentItems = themes.map((theme, index) =>
    <ImageBlock
      key={index}
      url={theme.image}
      link={theme.link}
      title={theme.title}
      color={theme.color}
    />
  );

  return (
    <div
      className={styles.contentPage}
    >
      <div
        className={styles.content}
      >
        {contentItems}
      </div>
    </div>
  );
}

BervanContentPage.propTypes = {
  themes: PropTypes.array.isRequired
};

export default BervanContentPage;
