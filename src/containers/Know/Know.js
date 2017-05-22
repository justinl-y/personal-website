import React from 'react';
import PropTypes from 'prop-types';

// import styles from './styles.scss';

const Know = ({ sectionContent, randomKey }) => (
  <div>
    <h2>{sectionContent.title}</h2>
    {
      sectionContent.items.map(item =>
        (<div key={randomKey()}>
          <h3>{item.title}</h3>
          <p>{item.summary}</p>
          <ul>
            {
              item.skills.map(skill => (<li key={randomKey()}>{skill}</li>))
            }
          </ul>
        </div>),
      )
    }
  </div>
);

Know.propTypes = {
  sectionContent: PropTypes.object.isRequired,
  randomKey: PropTypes.func.isRequired,
};

export default Know;
