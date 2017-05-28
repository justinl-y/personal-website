import BREAKPOINTS from '../../styles/breakpoint.config';

export default {
  '.headerText': {
    color: 'red',
  },
  [BREAKPOINTS.medium]: {
    '.headerText': {
      color: 'blue',
    },
  },
  [BREAKPOINTS.large]: {
    '.headerText': {
      color: 'green',
    },
  },
};
