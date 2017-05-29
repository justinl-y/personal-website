import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

const Contact = ({ sectionContent }) => (
  <div className={styles.component}>
    <div className={styles.container}>
      <i className="fa fa-telegram fa-3x" aria-hidden="true" />
      <h2>{sectionContent.title}</h2>
      <div className={styles.contactSections}>
        <div className={styles.contactSectionItem}>
          <ul className={styles.contactLinks}>
            <li className={styles.contactLinkItems}>
              <i className="fa fa-linkedin-square fa-2x" aria-hidden="true" />
              <a href={sectionContent.items.linkedIn.url} target="_blank" rel="noopener noreferrer">{sectionContent.items.linkedIn.title}</a>
            </li>
            <li className={styles.contactLinkItems}>
              <i className="fa fa-github fa-2x" aria-hidden="true" />
              <a href={sectionContent.items.github.url} target="_blank" rel="noopener noreferrer">{sectionContent.items.github.title}</a>
            </li>
          </ul>
        </div>
        <div className={styles.contactSectionItem}>
          <form className={styles.contactForm}>
            <label htmlFor="name">Your Name</label>
            <input id="name" type="text" />
            <label htmlFor="email">Your Email</label>
            <input id="email" type="text" />
            <label htmlFor="subject">Subject</label>
            <input id="subject" type="text" />
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="10" />
            <button onClick={e => e.preventDefault()}>Send</button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

Contact.propTypes = {
  sectionContent: PropTypes.object.isRequired,
};

export default Contact;
