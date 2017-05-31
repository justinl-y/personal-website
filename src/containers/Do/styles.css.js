import {
  TITLE_PADDING,
  CONTENT_PADDING,
  CONTAINER_WIDTH,
} from '../../styles/layout.config';
import BREAKPOINTS from '../../styles/breakpoint.config';
import { FONT_SIZE } from '../../styles/typography.config';
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
  '.quoteHeader': {
    textAlign: 'center',
    fontFamily: 'Roboto Slab',
    lineHeight: 1.3,
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
  '.content': {
    paddingTop: `${CONTENT_PADDING.small}rem`,
    paddingBottom: `${CONTENT_PADDING.small}rem`,
    textAlign: 'center',
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
    '.content': {
      maxWidth: CONTAINER_WIDTH,
      paddingTop: `${CONTENT_PADDING.large}rem`,
      paddingBottom: `${CONTENT_PADDING.large}rem`,
    },
  },
};
