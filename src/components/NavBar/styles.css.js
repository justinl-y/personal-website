import { CONTAINER_WIDTH } from '../../styles/layout.config';
import BREAKPOINTS from '../../styles/breakpoint.config';
import { FONT_SIZE } from '../../styles/typography.config';

export default {
  '.navBar': {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    '.navBarItemLeft': {
      // width: '100%',
      display: 'flex',
      // justifyContent: 'space around',
    },
    '.navBarItemMiddle': {
      // width: '100%',
      display: 'flex',
      // justifyContent: 'space around',
    },
    '.navBarItemRight': {
      // width: '100%',
      display: 'flex',
      // justifyContent: 'space around',
    },
  },
  [BREAKPOINTS.medium]: {
    '.navBar': {
      fontSize: FONT_SIZE.base,
      justifyContent: 'space-between',
    },
    '.navBarItemLeft': {
      width: '100%',
      display: 'flex',
      flexGrow: 2,
      justifyContent: 'flex-start',
    },
    '.navBarItemMiddle': {
      width: '100%',
      display: 'flex',
      flexGrow: 1,
      flexShrink: 2,
      justifyContent: 'center',
    },
    '.navBarItemRight': {
      width: '100%',
      display: 'flex',
      flexGrow: 2,
      justifyContent: 'flex-end',
    },
  },
  [BREAKPOINTS.large]: {
    '.navBar': {
      maxWidth: CONTAINER_WIDTH,
    },
  },
};
