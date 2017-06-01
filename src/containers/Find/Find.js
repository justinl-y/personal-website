import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

const Find = ({ sectionContent, divRef }) => (
  <div className={styles.component}>
    <div className={styles.title} ref={divRef}>
      <i className="fa fa-paper-plane" aria-hidden="true" />
      <h2>{sectionContent.title}</h2>
    </div>
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.findSections}>
          <div className={styles.findSectionItem}>

            <ul className={styles.links}>
              <li className={styles.linkItems}>
                <i className="fa fa-linkedin-square" aria-hidden="true" />
                <span className={styles.itemText}>
                  {`${sectionContent.items.linkedIn.text}`}
                  <a href={sectionContent.items.linkedIn.url} target="_blank" rel="noopener noreferrer">here</a>.
                </span>
              </li>
              <li className={styles.linkItems}>
                <i className="fa fa-github" aria-hidden="true" />
                <span>
                  {`${sectionContent.items.github.text}`}
                  <a href={sectionContent.items.github.url} target="_blank" rel="noopener noreferrer">here</a>.
                </span>
              </li>
            </ul>

          </div>
          <div className={styles.findSectionItem}>

            <div className={styles.contactItems}>
              <i className="fa fa-envelope-square" aria-hidden="true" />
              <div className={styles.itemText}>{sectionContent.items.email.text}</div>
            </div>
            <form className={styles.contactForm}>
              <div className={styles.contactFormItems}>
                <label htmlFor="name">Your Name</label>
                <input id="name" type="text" />
                <label htmlFor="email">Your Email</label>
                <input id="email" type="text" />
                <label htmlFor="subject">Subject</label>
                <input id="subject" type="text" />
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="10" />
                <button onClick={e => e.preventDefault()}>Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Find.propTypes = {
  divRef: PropTypes.func.isRequired,
  sectionContent: PropTypes.object.isRequired,
};

export default Find;
