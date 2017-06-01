import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

const Work = ({ sectionContent, divRef, randomKey }) => (
  <div className={styles.component}>
    <div className={styles.title} ref={divRef}>
      <i className="fa fa-archive" aria-hidden="true" />
      <h2 className={styles.headerStyle}>{sectionContent.title}</h2>
    </div>
    <div className={styles.content}>
      <div className={styles.work}>
        {
        sectionContent.items.map(item => (
          <div key={randomKey()} className={styles.workItem}>
            <div className={styles.workItemImage}>
              <a href={item.summary.url} target="_blank" rel="noopener noreferrer">
                <div
                  className={styles.itemImage}
                  style={{ background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${item.summary.image}) repeat-x center top / cover` }}
                >
                  <h3>{item.summary.title}</h3>
                </div>
              </a>
            </div>
            <div className={styles.workItemText}>
              <p>{item.summary.description}</p>
              <h4>{item.detail.technologies.title}</h4>
              <p>{item.detail.technologies.items.join(', ')}</p>
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

// <img src={item.summary.image} alt={item.summary.title} />
// background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${WORK_IMAGE_SRC}) repeat-x center center / cover,
