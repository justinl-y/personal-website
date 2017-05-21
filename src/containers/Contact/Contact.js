import React from 'react';
import PropTypes from 'prop-types';

// import styles from './styles.scss';

const Contact = ({ pageContent }) => (
  <div>
    <h2>{pageContent.title}</h2>
    <div>
      <ul>
        <li><a href={pageContent.items.linkedIn.url} target="_blank" rel="noopener noreferrer">{pageContent.items.linkedIn.title}</a></li>
        <li><a href={pageContent.items.github.url} target="_blank" rel="noopener noreferrer">{pageContent.items.github.title}</a></li>
      </ul>
    </div>
    <div>
      <form>
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
);

Contact.propTypes = {
  pageContent: PropTypes.object.isRequired,
};

export default Contact;
