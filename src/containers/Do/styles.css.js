import { CONTAINER_WIDTH } from '../../styles/layout.config';
import BREAKPOINTS from '../../styles/breakpoint.config';
import { FONT_SIZE } from '../../styles/typography.config';

export default {
  '.component': {
    display: 'flex',
    textAlign: 'center',
  },
  [BREAKPOINTS.medium]: {
    '.component': {
      justifyContent: 'center',
    },
    '.container': {
      fontSize: FONT_SIZE.base,
    },
  },
  [BREAKPOINTS.large]: {
    '.container': {
      maxWidth: CONTAINER_WIDTH,
    },
  },
};
