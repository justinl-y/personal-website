import { CONTAINER_WIDTH } from '../../styles/layout.config';
import BREAKPOINTS from '../../styles/breakpoint.config';
import { FONT_SIZE } from '../../styles/typography.config';

export default {
  '.component': {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
  },
  '.contactSections': {
    display: 'flex',
    flexFlow: 'column nowrap',
  },
  '.contactForm': {
    width: 400,
    display: 'flex',
    flexFlow: 'column nowrap',
  },
  '.contactLinks': {
    padding: 0,
  },
  '.contactLinkItems': {
    listStyleType: 'none',
  },
  [BREAKPOINTS.medium]: {
    '.container': {
      fontSize: FONT_SIZE.base,
    },
    '.contactSections': {
      flexFlow: 'row nowrap',
    },
    '.contactSectionItem': {
      flexBasis: '50%',
    },
  },
  [BREAKPOINTS.large]: {
    '.container': {
      maxWidth: CONTAINER_WIDTH,
    },
  },
};
