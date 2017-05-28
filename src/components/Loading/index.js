import React from 'react';

import styles from './styles.css';

const Loading = () => (
  <div className={styles.component}>
    <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw" />
    <span className="sr-only">Loading...</span>
  </div>
);

export default Loading;
