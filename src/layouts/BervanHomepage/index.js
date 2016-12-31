import React from 'react';
import Metadata from '../../components/head/Metadata';
import NavBar from '../../components/headers/NavBar';
import WelcomeHeader from '../../components/headers/WelcomeHeader';
import styles from './index.css';

const BervanHomepage = (props) => {
  const content = [];
  for (let i = 0; i < 1000; i++) {
    content.push(
      <div key={i}>
        hier komt content: {i}
        <br/>
      </div>
    )
  }

  return (
    <div className={ styles.bervanHomepage }>
      <Metadata { ...props } />
      <NavBar
        height="56px"
        { ...props }
      />
      <WelcomeHeader
        pageHeightLoss="56px"
        { ...props }
      />
      { content }
    </div>
  )
}

export default BervanHomepage
