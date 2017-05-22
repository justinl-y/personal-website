import React from 'react';
import PropTypes from 'prop-types';

// import styles from './styles.scss';

const Work = ({ sectionContent, randomKey }) => (
  <div>
    <h2>{sectionContent.title}</h2>
    {
      sectionContent.items.map(item => (
        <div key={randomKey()}>
          <div className="work-summary">
            <a href={item.summary.url} target="_blank" rel="noopener noreferrer">
              <img src={item.summary.image} alt={item.summary.title} />
            </a>
            <h3>{item.summary.title}</h3>
            <p>{item.summary.description}</p>
          </div>
          <div className="work-detail">
            <div>
              <h3>{item.detail.tasks.title}</h3>
              <ul>
                {
                  item.detail.tasks.items.map(task => (
                    <li key={randomKey()}>{task}</li>
                  ))
                }
              </ul>
            </div>
            <div>
              <h3>{item.detail.technologies.title}</h3>
              <ul>
                {
                  item.detail.technologies.items.map(technology => (
                    <li key={randomKey()}>{technology}</li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      ))
    }
  </div>
);

Work.propTypes = {
  sectionContent: PropTypes.object.isRequired,
  randomKey: PropTypes.func.isRequired,
};

export default Work;
