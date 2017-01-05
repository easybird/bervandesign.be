import React, { PropTypes } from 'react';
import styles from './index.css';
import Pointer from '../../components/headers/Pointer';
import ImageBlock from '../../components/contents/ImageBlock';

const BervanContentPage = ({ themes, scrollTo, isActive, pageHeightLoss }) => {
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
      style={{ height: `calc(100vh - ${pageHeightLoss})` }}
    >
      <div
        className={styles.content}
      >
        {contentItems}
      </div>
      <Pointer
        scrollTo={scrollTo}
        isActive={isActive}
      />
    </div>
  );
}

BervanContentPage.propTypes = {
  scrollTo: React.PropTypes.string,
  isActive: React.PropTypes.func,
  themes: PropTypes.array.isRequired,
  pageHeightLoss: React.PropTypes.string.isRequired,
};

export default BervanContentPage;
