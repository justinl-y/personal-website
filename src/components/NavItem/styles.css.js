import BREAKPOINTS from '../../styles/breakpoint.config';
import { WHITE, CLAY, SMOKE, BONDI } from '../../styles/colour.config';

export default {
  '.navItem': {
    display: 'inline',
    paddingRight: 40,
  },
  '.navItem:last-child': {
    paddingRight: 0,
  },
  '.navLinkText': {
    fontWeight: 'bold',
    display: 'none',
  },
  '.navLink:link': {
    color: WHITE,
  },
  '.navLink:hover': {
    color: SMOKE,
  },
  '.navLink:visited': {
    color: CLAY,
  },
  '.navLink:visited:hover': {
    color: SMOKE,
  },
  '.selected': {
    color: `${BONDI} !important`,
  },
  [BREAKPOINTS.medium]: {
    '.navLinkIcon': {
      display: 'none',
    },
    '.navLinkText': {
      display: 'inline',
      fontSize: '1rem',
    },
  },
  [BREAKPOINTS.large]: {
    '.navlinkItems': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    '.navLinkIcon': {
      display: 'inline',
      // marginRight: 7.5,
    },
    '.navLinkIcon:last-child': {
      // marginRight: 0,
    },
  },
};
