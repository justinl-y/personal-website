import BREAKPOINTS from '../../styles/breakpoint.config';

const small = `@media (min-width: ${BREAKPOINTS.SMALL.max}px)`;

export default {
  [small]: {
    '.headerText': {
      color: 'red',
    },
  },
};
