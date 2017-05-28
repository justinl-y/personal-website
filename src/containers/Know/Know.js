import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

const Know = ({ sectionContent, randomKey }) => (
  <div className={styles.component}>
    <div className={styles.container}>
      <h2>{sectionContent.title}</h2>
      <div className={styles.skills}>
        {
          sectionContent.items.map(item =>
            (<div key={randomKey()} className={styles.skillType}>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <ul className={styles.skillList}>
                {
                  item.skills.map(skill => (
                    <li
                      key={randomKey()}
                      className={styles.skillItems}
                    >{skill}
                    </li>))
                }
              </ul>
            </div>),
          )
        }
      </div>
    </div>
  </div>
);

Know.propTypes = {
  sectionContent: PropTypes.object.isRequired,
  randomKey: PropTypes.func.isRequired,
};

export default Know;
