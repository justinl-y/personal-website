import React from 'react';
import PropTypes from 'prop-types';

// import styles from './styles.scss';

const Work = ({ pageContent }) => (
  <div>
    <h2>{pageContent.title}</h2>
    {
      pageContent.items.map(item =>
        (<div key={Date.now() * Math.random()}>
          <div className="work-summary">
            <img src={item.summary.image} alt="" />
            <h3><a href={item.summary.url} target="_blank" rel="noopener noreferrer">{item.summary.title}</a></h3>
            <p>{item.summary.description}</p>
          </div>
          <div className="work-detail">
            <ul>
              {
                item.detail.map(detail => (<li key={Date.now() * Math.random()}>{detail}</li>))
              }
            </ul>
          </div>
        </div>),
      )
    }
  </div>
);

Work.propTypes = {
  pageContent: PropTypes.object.isRequired,
};

export default Work;
