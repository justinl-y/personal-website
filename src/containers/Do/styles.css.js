import { CONTAINER_WIDTH } from '../../styles/layout.config';
import BREAKPOINTS from '../../styles/breakpoint.config';
import { FONT_SIZE } from '../../styles/typography.config';
import { DO_IMAGE_SRC } from '../../styles/asset.config';

export default {
  '.component': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  '.quote': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '5rem',
    paddingBottom: '5rem',
  },
  '.title': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '7.5rem',
    paddingBottom: '7.5rem',
    width: '100%',
    background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${DO_IMAGE_SRC}) repeat-x center center / cover`,
  },
  '.content': {
    paddingTop: '5rem',
    paddingBottom: '5rem',
    textAlign: 'center',
  },
  '.doItems:last-child': {
    marginBottom: 0,
  },
  [BREAKPOINTS.medium]: {
    '.component': {
      justifyContent: 'center',
    },
    '.content': {
      fontSize: FONT_SIZE.base,
    },
  },
  [BREAKPOINTS.large]: {
    '.quote': {
      paddingTop: '7.5rem',
      paddingBottom: '7.5rem',
    },
    '.title': {
      paddingTop: '10rem',
      paddingBottom: '10rem',
    },
    '.content': {
      maxWidth: CONTAINER_WIDTH,
      paddingTop: '7rem',
      paddingBottom: '7rem',
    },
  },
};
