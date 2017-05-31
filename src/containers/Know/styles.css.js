import {
  TITLE_PADDING,
  CONTENT_PADDING,
  CONTAINER_WIDTH,
} from '../../styles/layout.config';
import BREAKPOINTS from '../../styles/breakpoint.config';
import { FONT_SIZE } from '../../styles/typography.config';
import { KNOW_IMAGE_SRC } from '../../styles/asset.config';
import { SMOKE } from '../../styles/colour.config';

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
    paddingTop: `${TITLE_PADDING.small}rem`,
    paddingBottom: `${TITLE_PADDING.small}rem`,
    width: '100%',
    background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${KNOW_IMAGE_SRC}) repeat-x center center / cover`,
    color: SMOKE,
  },
  '.content': {
    paddingTop: `${CONTENT_PADDING.small}rem`,
    paddingBottom: `${CONTENT_PADDING.small}rem`,
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
    '.title': {
      paddingTop: `${TITLE_PADDING.medium}rem`,
      paddingBottom: `${TITLE_PADDING.medium}rem`,
    },
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
      paddingTop: `${TITLE_PADDING.large}rem`,
      paddingBottom: `${TITLE_PADDING.large}rem`,
    },
    '.content': {
      maxWidth: CONTAINER_WIDTH,
      paddingTop: `${CONTENT_PADDING.large}rem`,
      paddingBottom: `${CONTENT_PADDING.large}rem`,
    },
    '.skillType': {
      flexBasis: '25%',
    },
  },
};
