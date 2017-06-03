import {
  TITLE_PADDING,
  CONTENT_PADDING,
  CONTAINER_WIDTH,
} from '../../styles/layout.config';
import BREAKPOINTS from '../../styles/breakpoint.config';
import { FONT_AWESOME_ICON_SIZE, FONT_SIZE_HEADING } from '../../styles/typography.config';
import { KNOW_IMAGE_SRC } from '../../styles/asset.config';
import { SMOKE, CLAY, SAFFRON } from '../../styles/colour.config';

export default {
  '.component': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: SMOKE,
  },
  '.title': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: `${TITLE_PADDING.small}rem`,
    paddingBottom: `${TITLE_PADDING.small}rem`,
    width: '100%',
    background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${KNOW_IMAGE_SRC}) no-repeat center center / cover`,
    color: SMOKE,
  },
  '.title i': {
    fontSize: `${FONT_AWESOME_ICON_SIZE.small}rem`,
  },
  '.skills': {
    display: 'flex',
    flexFlow: 'column nowrap',
  },
  '.skillItem': {
    display: 'flex',
    height: '30rem',

    paddingTop: '0.75rem',
    paddingBottom: '0.75rem',
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem',
  },
  '.skillItem:first-child': {
    paddingTop: '1.5rem',
  },
  '.skillItem:last-child': {
    paddingBottom: '1.5rem',
  },
  '.skillDetail': {
    width: '100%',
    // border: '1px solid black',
    flexFlow: 'column nowrap',
    backgroundColor: CLAY,
    color: SMOKE,

    textAlign: 'center',
    padding: '1rem',
    overflow: 'hidden',
  },
  '.skillDetail h3': {
    color: SAFFRON,
  },
  '.skillList': {
    paddingLeft: 0,
    margin: 0,
  },
  '.skillItems': {
    listStyleType: 'none',
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
    '.content': {
      // fontSize: FONT_SIZE.base,
    },
    '.skills': {
      flexFlow: 'row wrap',
    },
    '.skillItem': {
      flexBasis: '50%',
    },

    '.skillItem:nth-child(odd)': {
      paddingLeft: '1.5rem',
      paddingRight: '0.75rem',
    },
    '.skillItem:nth-child(even)': {
      paddingLeft: '0.75rem',
      paddingRight: '1.5rem',
    },
    '.skillItem:nth-child(-n + 2)': {
      paddingTop: '1.5rem',
    },
    '.skillItem:nth-child(n + 3)': {
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
    '.skillItem': {
      flexBasis: '25%',
    },
    '.skillItem:first-child': {
      paddingLeft: '1.5rem',
      paddingRight: '0.75rem',
    },
    '.skillItem:last-child': {
      paddingRight: '1.5rem',
      paddingLeft: '0.75rem',
    },
    '.skillItem:nth-child(-n + 4)': {
      paddingTop: '1.5rem',
      paddingBottom: '1.5rem',
    },
    '.skillItem:nth-child(n+2):nth-child(-n+3)': {
      paddingLeft: '0.75rem',
      paddingRight: '0.75rem',
    },
    '.skillDetail h3': {
      marginTop: 0,
    },
  },
};
