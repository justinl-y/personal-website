import { CONTAINER_WIDTH } from '../../styles/layout.config';
import BREAKPOINTS from '../../styles/breakpoint.config';
import { FONT_SIZE } from '../../styles/typography.config';

export default {
  '.component': {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
  },
  '.skills': {
    display: 'flex',
    flexFlow: 'column nowrap',
  },
  '.skillType': {
    display: 'flex',
    flexFlow: 'column nowrap',
  },
  '.skillList': {
    padding: 0,
  },
  '.skillItems': {
    listStyleType: 'none',
  },
  [BREAKPOINTS.medium]: {
    '.container': {
      fontSize: FONT_SIZE.base,
    },
    '.skills': {
      flexFlow: 'row wrap',
    },
    '.skillType': {
      flexBasis: '50%',
    },
  },
  [BREAKPOINTS.large]: {
    '.container': {
      maxWidth: CONTAINER_WIDTH,
    },
    '.skillType': {
      flexBasis: '25%',
    },
  },
};
