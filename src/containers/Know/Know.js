import React from 'react';
import PropTypes from 'prop-types';

// import styles from './styles.scss';

const Know = ({ divRef, pageContent }) => (
  <div ref={divRef}>
    <h2>{pageContent.title}</h2>
    {
      pageContent.items.map(item =>
        (<div key={Date.now() * Math.random()}>
          <h3>{item.title}</h3>
          <p>{item.summary}</p>
          <ul>
            {
              item.skills.map(skill => (<li key={Date.now() * Math.random()}>{skill}</li>))
            }
          </ul>
        </div>),
      )
    }
  </div>
);

Know.propTypes = {
  divRef: PropTypes.func.isRequired,
  pageContent: PropTypes.object.isRequired,
};

export default Know;
