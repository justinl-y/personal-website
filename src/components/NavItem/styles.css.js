import BREAKPOINTS from '../../styles/breakpoint.config';

export default {
  '.navItem': {
    display: 'inline',
    paddingRight: 10,
  },
  '.navItem:last-child': {
    paddingRight: 0,
  },
  '.navLinkIcon': {
    marginRight: 5,
  },
  '.navLinkIcon:last-child': {
    marginRight: 0,
  },
  '.navLinkText': {
    display: 'none',
  },
  '.selected': {
    fontWeight: 'bold',
    color: 'red',
  },
  [BREAKPOINTS.medium]: {
    '.navLinkIcon': {
      display: 'none',
    },
    '.navLinkText': {
      display: 'inline',
    },
  },
  [BREAKPOINTS.large]: {
    '.navLinkIcon': {
      display: 'inline',
    },
  },
};
