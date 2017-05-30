import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

const Work = ({ sectionContent, divRef, randomKey }) => (
  <div className={styles.component}>
    <div className={styles.title} ref={divRef}>
      <i className="fa fa-archive fa-3x" aria-hidden="true" />
      <h2 className={styles.headerStyle}>{sectionContent.title}</h2>
    </div>
    <div className={styles.content}>
      <div className={styles.work}>
        {
        sectionContent.items.map(item => (
          <div key={randomKey()} className={styles.workItem}>
            <div className="work-summary">
              <a href={item.summary.url} target="_blank" rel="noopener noreferrer">
                <img src={item.summary.image} alt={item.summary.title} />
              </a>
              <h3>{item.summary.title}</h3>
              <p>{item.summary.description}</p>
            </div>
            <div className="work-detail">
              {/* <div>
                <h4>{item.detail.tasks.title}</h4>
                <ul className={styles.workList}>
                  {
                    item.detail.tasks.items.map(task => (
                      <li key={randomKey()}>{task}</li>
                    ))
                  }
                </ul>
              </div>*/}
              <div>
                <h4>{item.detail.technologies.title}</h4>
                <ul className={styles.workList}>
                  {
                    item.detail.technologies.items.map(technology => (
                      <li key={randomKey()} className={styles.workItems}>{technology}</li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>
        ))
      }
      </div>
    </div>
  </div>
);

Work.propTypes = {
  divRef: PropTypes.func.isRequired,
  sectionContent: PropTypes.object.isRequired,
  randomKey: PropTypes.func.isRequired,
};

export default Work;
