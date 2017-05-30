import { CONTAINER_WIDTH } from '../../styles/layout.config';
import BREAKPOINTS from '../../styles/breakpoint.config';
import { FONT_SIZE } from '../../styles/typography.config';
import { FIND_IMAGE_SRC } from '../../styles/asset.config';

export default {
  '.component': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  '.title': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '7.5rem',
    paddingBottom: '7.5rem',
    width: '100%',
    background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${FIND_IMAGE_SRC}) repeat-x center center / cover`,
  },
  '.findSections': {
    display: 'flex',
    flexFlow: 'column nowrap',
  },
  '.findLinks': {
    padding: 0,
  },
  '.findLinkItems': {
    listStyleType: 'none',
  },
  '.contactForm': {
    width: 400,
    display: 'flex',
    flexFlow: 'column nowrap',
  },
  [BREAKPOINTS.medium]: {
    '.content': {
      fontSize: FONT_SIZE.base,
    },
    '.findSections': {
      flexFlow: 'row nowrap',
    },
    '.findSectionItem': {
      flexBasis: '50%',
    },
  },
  [BREAKPOINTS.large]: {
    '.title': {
      paddingTop: '10rem',
      paddingBottom: '10rem',
    },
    '.content': {
      maxWidth: CONTAINER_WIDTH,
      paddingTop: '7.5rem',
      paddingBottom: '7.5rem',
    },
  },
};
