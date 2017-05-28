import BREAKPOINTS from '../../styles/breakpoint.config';

export default {
  '.component': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
