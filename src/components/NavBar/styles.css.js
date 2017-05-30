import { CONTAINER_WIDTH } from '../../styles/layout.config';
import BREAKPOINTS from '../../styles/breakpoint.config';
import { FONT_SIZE } from '../../styles/typography.config';

export default {
  '.component': {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  '.navBar': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  '.navBarItemLeft': {
    width: '100%',
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'flex-start',
    marginLeft: '1.5rem',
  },
  '.navBarItemMiddle': {
    width: '100%',
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'center',
    paddingTop: '0.25rem',
    paddingBottom: '0.25rem',
  },
  '.navBarItemRight': {
    width: '100%',
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'flex-end',
    marginRight: '1.5rem',
  },
  [BREAKPOINTS.medium]: {
    '.navBar': {
      fontSize: FONT_SIZE.base,
    },
    '.navBarItemLeft': {
      flexGrow: 2,
      justifyContent: 'flex-start',
    },
    '.navBarItemMiddle': {
      flexShrink: 2,
    },
    '.navBarItemRight': {
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
