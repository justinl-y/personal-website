import { CONTAINER_WIDTH } from '../../styles/layout.config';
import BREAKPOINTS from '../../styles/breakpoint.config';
import { FONT_SIZE } from '../../styles/typography.config';
import { KNOW_IMAGE_SRC } from '../../styles/asset.config';

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
    background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${KNOW_IMAGE_SRC}) repeat-x center center / cover`,
  },
  '.skills': {
    display: 'flex',
    flexFlow: 'column nowrap',
    textAlign: 'center',
  },
  '.skillType': {
    display: 'flex',
    flexFlow: 'column nowrap',
  },
  '.skillList': {
    padding: 0,
    marginBottom: 0,
  },
  '.skillItems': {
    listStyleType: 'none',
  },
  [BREAKPOINTS.medium]: {
    '.content': {
      fontSize: FONT_SIZE.base,
    },
    '.skills': {
      flexFlow: 'row wrap',
    },
    '.skillType': {
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
      paddingTop: '7rem',
      paddingBottom: '7rem',
    },
    '.skillType': {
      flexBasis: '25%',
    },
  },
};
