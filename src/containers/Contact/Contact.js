import React from 'react';
import PropTypes from 'prop-types';

// import styles from './styles.scss';

const Contact = ({ divRef, pageContent }) => (
  <div id="contact" ref={divRef}>
    <h2>{pageContent.title}</h2>
    <div>
      <p>{pageContent.items.linkedIn}</p>
      <p>{pageContent.items.github}</p>
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
  divRef: PropTypes.func.isRequired,
  pageContent: PropTypes.object.isRequired,
};

export default Contact;
