import { CONTAINER_WIDTH } from '../../styles/layout.config';
import BREAKPOINTS from '../../styles/breakpoint.config';
import { FONT_SIZE } from '../../styles/typography.config';
import { ABOUT_IMAGE_SRC } from '../../styles/asset.config';

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
    paddingTop: '5rem',
    paddingBottom: '5rem',
    width: '100%',
    background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${ABOUT_IMAGE_SRC}) repeat-x center center / cover`,
  },
  '.content': {
    textAlign: 'center',
  },
  '.workItems:last-child': {
    marginBottom: 0,
  },
  [BREAKPOINTS.medium]: {
    '.component': {
      display: 'flex',
      justifyContent: 'center',
    },
    '.content': {
      fontSize: FONT_SIZE.base,
    },
  },
  [BREAKPOINTS.large]: {
    '.title': {
      paddingTop: '7rem',
      paddingBottom: '7rem',
    },
    '.content': {
      maxWidth: CONTAINER_WIDTH,
      paddingTop: '7rem',
      paddingBottom: '7rem',
    },
  },
};
