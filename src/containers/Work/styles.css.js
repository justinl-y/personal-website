import { CONTAINER_WIDTH } from '../../styles/layout.config';
import BREAKPOINTS from '../../styles/breakpoint.config';
import { FONT_SIZE } from '../../styles/typography.config';
import { WORK_IMAGE_SRC } from '../../styles/asset.config';

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
    background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${WORK_IMAGE_SRC}) repeat-x center center / cover`,
  },
  '.work': {
    display: 'flex',
    flexFlow: 'column nowrap',
    textAlign: 'center',
  },
  '.workItem': {
    display: 'flex',
    flexFlow: 'column nowrap',
  },
  '.workList': {
    padding: 0,
  },
  '.workList:last-child': {
    marginBottom: 0,
  },
  '.workItems': {
    listStyleType: 'none',
  },
  [BREAKPOINTS.medium]: {
    '.content': {
      fontSize: FONT_SIZE.base,
    },
    '.work': {
      flexFlow: 'row wrap',
    },
    '.workItem': {
      flexBasis: '50%',
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
    '.workItem': {
      flexBasis: '33%',
    },
  },
};
