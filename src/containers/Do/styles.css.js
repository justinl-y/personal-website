import {
  TITLE_PADDING,
  CONTENT_PADDING,
  CONTAINER_WIDTH,
} from '../../styles/layout.config';
import BREAKPOINTS from '../../styles/breakpoint.config';
import { FONT_SIZE, FONT_AWESOME_ICON_SIZE, FONT_SIZE_HEADING } from '../../styles/typography.config';
import { DO_IMAGE_SRC } from '../../styles/asset.config';
import { SMOKE, CLAY } from '../../styles/colour.config';

export default {
  '.component': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  '.quote': {
    width: '100%',
    backgroundColor: CLAY,
    paddingTop: `${CONTENT_PADDING.small}rem`,
    paddingBottom: `${CONTENT_PADDING.small}rem`,
  },
  '.quote h2': {
    textAlign: 'center',
    fontFamily: 'Roboto Slab',
    lineHeight: 1.3,
    fontSize: '1.75rem',
  },
  '.lineBreak': {
    display: 'inline-block',
  },
  '.title': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: `${TITLE_PADDING.small}rem`,
    paddingBottom: `${TITLE_PADDING.small}rem`,
    width: '100%',
    background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${DO_IMAGE_SRC}) repeat-x center center / cover`,
    color: SMOKE,
  },
  '.title i': {
    fontSize: `${FONT_AWESOME_ICON_SIZE.small}rem`,
  },
  '.content': {
    paddingTop: `${CONTENT_PADDING.small}rem`,
    paddingBottom: `${CONTENT_PADDING.small}rem`,
    textAlign: 'center',
    maxWidth: '85%',
  },
  '.doItems:last-child': {
    marginBottom: 0,
  },
  [BREAKPOINTS.medium]: {
    '.component': {
      justifyContent: 'center',
    },
    '.title': {
      paddingTop: `${TITLE_PADDING.medium}rem`,
      paddingBottom: `${TITLE_PADDING.medium}rem`,
    },
    '.title i': {
      fontSize: `${FONT_AWESOME_ICON_SIZE.medium}rem`,
    },
    '.title h2': {
      fontSize: `${FONT_SIZE_HEADING.medium}rem`,
    },
    '.content': {
      fontSize: FONT_SIZE.base,
    },
  },
  [BREAKPOINTS.large]: {
    '.quote': {
      paddingTop: `${CONTENT_PADDING.large}rem`,
      paddingBottom: `${CONTENT_PADDING.large}rem`,
    },
    '.title': {
      paddingTop: `${TITLE_PADDING.large}rem`,
      paddingBottom: `${TITLE_PADDING.large}rem`,
    },
    '.title i': {
      fontSize: `${FONT_AWESOME_ICON_SIZE.large}rem`,
    },
    '.title h2': {
      fontSize: `${FONT_SIZE_HEADING.large}rem`,
    },
    '.content': {
      maxWidth: CONTAINER_WIDTH * 0.85,
      paddingTop: `${CONTENT_PADDING.large}rem`,
      paddingBottom: `${CONTENT_PADDING.large}rem`,
    },
  },
};
