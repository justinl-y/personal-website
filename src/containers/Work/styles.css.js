import {
  TITLE_PADDING,
  CONTENT_PADDING,
  CONTAINER_WIDTH,
} from '../../styles/layout.config';
import BREAKPOINTS from '../../styles/breakpoint.config';
import { FONT_AWESOME_ICON_SIZE, FONT_SIZE_HEADING } from '../../styles/typography.config';
import { WORK_IMAGE_SRC } from '../../styles/asset.config';
import { SMOKE, CLAY, CHARCOAL, BONDI, ICEGREY } from '../../styles/colour.config';

export default {
  '.component': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: CHARCOAL, //SMOKE
  },
  '.title': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: `${TITLE_PADDING.small}rem`,
    paddingBottom: `${TITLE_PADDING.small}rem`,
    width: '100%',
    background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${WORK_IMAGE_SRC}) repeat-x center center / cover`,
    color: SMOKE,
  },
  '.title i': {
    fontSize: `${FONT_AWESOME_ICON_SIZE.small}rem`,
  },
  '.work': {
    display: 'flex',
    flexFlow: 'column nowrap',
  },
  '.workItem': {
    display: 'flex',
    flexFlow: 'column nowrap',
    height: '30rem',
    flex: '0 1 100%',

    paddingTop: '0.75rem',
    paddingBottom: '0.75rem',
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem',

    // backgroundColor: CHARCOAL,
  },
  '.workItem:first-child': {
    paddingTop: '1.5rem',
  },
  '.workItem:last-child': {
    paddingBottom: '1.5rem',
  },
  '.workItemImage': {
    flex: '0 0 100%',
    maxHeight: '50%',
    minHeight: '50%',
    // border: `1px solid ${CLAY}`,
  },
  '.itemImage': {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  '.itemImage h3': {
    color: SMOKE,
    fontSize: '1.5rem',

    '&:hover': {
      color: BONDI,
    },
  },
  '.workItemText': {
    flex: '0 0 100%',
    maxHeight: '50%',
    minHeight: '50%',
    padding: '1rem',
    overflow: 'hidden',
    textAlign: 'center',

    backgroundColor: CLAY,
    color: ICEGREY,
  },
  '.workItemText p': {
    marginTop: 0,
    marginBottom: 0,
  },
  '.workItemText h4': {
    marginTop: '0.75rem',
    marginBottom: '0.75rem',
    textAlign: 'center',
    color: SMOKE,
  },
  [BREAKPOINTS.medium]: {
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
    '.work': {
      flexFlow: 'row wrap',
    },
    '.workItem': {
      flex: '0 0 50%',
    },
    '.workItem:nth-child(odd)': {
      paddingLeft: '1.5rem',
      paddingRight: '0.75rem',
    },
    '.workItem:nth-child(even)': {
      paddingLeft: '0.75rem',
      paddingRight: '1.5rem',
    },
    '.workItem:nth-child(-n + 2)': {
      paddingTop: '1.5rem',
      paddingBottom: '0.75rem',
    },
    '.workItem:nth-child(n + 5)': {
      paddingTop: '0.75rem',
      paddingBottom: '1.5rem',
    },
  },
  [BREAKPOINTS.large]: {
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
      maxWidth: CONTAINER_WIDTH,
      paddingTop: `${CONTENT_PADDING.large}rem`,
      paddingBottom: `${CONTENT_PADDING.large}rem`,
    },
    '.workItem': {
      flexBasis: '33.333%',
    },
    '.workItem:nth-child(-n + 3)': {
      paddingTop: '1.5rem',
      paddingBottom: '0.75rem',
    },
    '.workItem:nth-child(n + 4)': {
      paddingTop: '0.75rem',
      paddingBottom: '1.5rem',
    },
    '.workItem:nth-child(3n + 1)': {
      paddingLeft: '1.5rem',
      paddingRight: '0.75rem',
    },
    '.workItem:nth-child(3n + 3)': {
      paddingLeft: '0.75rem',
      paddingRight: '1.5rem',
    },
    '.workItem:nth-child(3n + 2)': {
      paddingLeft: '0.75rem',
      paddingRight: '0.75rem',
    },
  },
};
