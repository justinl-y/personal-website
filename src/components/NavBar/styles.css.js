import { CONTAINER_WIDTH } from '../../styles/layout.config';
import BREAKPOINTS from '../../styles/breakpoint.config';
import { FONT_SIZE } from '../../styles/typography.config';

export default {
  '.navBar': {
    display: 'flex',
    width: '100%',
  },
  [BREAKPOINTS.medium]: {
    '.navBar': {
      fontSize: FONT_SIZE.base,
      justifyContent: 'space-between',
    },
    '.navBarItemLeft': {
      width: '100%',
      flexGrow: 2,
      display: 'flex',
      justifyContent: 'flex-start',
    },
    '.navBarItemMiddle': {
      width: '100%',
      flexGrow: 1,
      flexShrink: 2,
      display: 'flex',
      justifyContent: 'center',
    },
    '.navBarItemRight': {
      width: '100%',
      flexGrow: 2,
      display: 'flex',
      justifyContent: 'flex-end',
    },
  },
  [BREAKPOINTS.large]: {
    '.navBar': {
      maxWidth: CONTAINER_WIDTH,
    },
  },
};
