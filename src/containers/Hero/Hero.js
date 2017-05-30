import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

const Hero = ({ sectionContent }) => (
  <div className={styles.component}>
    <h1 className={styles.headerTextPrimary}>
      <span className={styles.lineBreak}>{sectionContent.primaryTitlePartOne}</span>
      <span className={styles.lineBreak}>{sectionContent.primaryTitlePartTwo}</span>
    </h1>
    <h2 className={styles.headerTextSecondary}>{sectionContent.secondaryTitle}</h2>
    <div className={styles.contactItems}>
      <ul className={styles.contactLinks}>
        <li className={styles.contactLinkItems}>
          <a href={sectionContent.items.linkedIn.url} target="_blank" rel="noopener noreferrer" className={styles.linkRef}>
            <span className="fa-stack fa-2x">
              <i className="fa fa-square fa-stack-2x" aria-hidden="true" />
              <i className={`fa fa-linkedin-square fa-stack-2x ${styles.iconBackground}`} aria-hidden="true" />
            </span>
          </a>
        </li>
        <li className={styles.contactLinkItems}>
          <a href={sectionContent.items.github.url} target="_blank" rel="noopener noreferrer" className={styles.linkRef}>
            <span className="fa-stack fa-2x">
              <i className="fa fa-circle fa-stack-2x" aria-hidden="true" />
              <i className={`fa fa-github fa-stack-2x ${styles.iconBackground}`} aria-hidden="true" />
            </span>
          </a>
        </li>
      </ul>
    </div>
  </div>
);

Hero.propTypes = {
  sectionContent: PropTypes.object.isRequired,
};

export default Hero;
