import { CONTAINER_WIDTH } from '../../styles/layout.config';
import BREAKPOINTS from '../../styles/breakpoint.config';
import { FONT_SIZE } from '../../styles/typography.config';

export default {
  '.component': {
    textAlign: 'center',
  },
  '.headerText': {
  },
  [BREAKPOINTS.medium]: {
    '.component': {
      display: 'flex',
      justifyContent: 'center',
    },
    '.container': {
      fontSize: FONT_SIZE.base,
    },
    '.headerText': {
    },
  },
  [BREAKPOINTS.large]: {
    '.container': {
      maxWidth: CONTAINER_WIDTH,
    },
    '.headerText': {
    },
  },
};
