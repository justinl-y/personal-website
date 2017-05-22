import React from 'react';

import { currentYear } from '../../helpers/functions';

const Footer = () => (
  <div className="footer">
    <p>&copy; Justin Levett-Yeats {currentYear()}</p>
  </div>
);

export default Footer;
