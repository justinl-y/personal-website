import { CONTAINER } from '../../styles/layout.config';
import BREAKPOINTS from '../../styles/breakpoint.config';

const medium = `@media (min-width: ${BREAKPOINTS.MEDIUM.min}px)`;
const large = `@media (min-width: ${BREAKPOINTS.LARGE.min}px)`;

const container = `${CONTAINER}px`;

export default {
  // small
  [medium]: {
  },
  [large]: {
    '.container': {
      display: 'flex',
      // justifyContent: 'center',
      // maxWidth: container,
    },
  },
};
