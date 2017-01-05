import React from "react"

import styles from "./index.css"

const Footer = () => (
  <footer className={ styles.footer }>
    <p>
      <a
        href={ "http://easybird.be" }
        target="_blank"
        className={ styles.phenomicReference }
      >
        { "Made by " }
        <span className={ styles.phenomicReferenceName }>
          {  `Easybird.be` }
        </span>
      </a>
    </p>
  </footer>
)

export default Footer
