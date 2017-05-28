import { CONTAINER_WIDTH } from '../../styles/layout.config';
import BREAKPOINTS from '../../styles/breakpoint.config';
import { FONT_SIZE } from '../../styles/typography.config';

export default {
  '.component': {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
  },
  '.work': {
    display: 'flex',
    flexFlow: 'column nowrap',
  },
  '.workItem': {
    display: 'flex',
    flexFlow: 'column nowrap',
  },
  '.workList': {
    padding: 0,
  },
  '.workItems': {
    listStyleType: 'none',
  },
  [BREAKPOINTS.medium]: {
    '.container': {
      fontSize: FONT_SIZE.base,
    },
    '.work': {
      flexFlow: 'row wrap',
    },
    '.workItem': {
      flexBasis: '50%',
    },
  },
  [BREAKPOINTS.large]: {
    '.container': {
      maxWidth: CONTAINER_WIDTH,
    },
    '.workItem': {
      flexBasis: '33%',
    },
  },
};