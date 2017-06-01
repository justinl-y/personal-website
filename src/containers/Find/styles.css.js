import {
  TITLE_PADDING,
  CONTENT_PADDING,
  CONTAINER_WIDTH,
} from '../../styles/layout.config';
import BREAKPOINTS from '../../styles/breakpoint.config';
import { FONT_SIZE, FONT_AWESOME_ICON_SIZE, FONT_SIZE_HEADING } from '../../styles/typography.config';
import { FIND_IMAGE_SRC } from '../../styles/asset.config';
import { SMOKE, CLAY } from '../../styles/colour.config';

export default {
  '.component': {
    // display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'center',
  },
  '.title': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: `${TITLE_PADDING.small}rem`,
    paddingBottom: `${TITLE_PADDING.small}rem`,
    width: '100%',
    background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${FIND_IMAGE_SRC}) repeat-x center center / cover`,
    color: SMOKE,
  },
  '.title i': {
    fontSize: `${FONT_AWESOME_ICON_SIZE.small}rem`,
  },
  '.container': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // backgroundColor: SMOKE,
  },
  '.content': {
    paddingTop: `${CONTENT_PADDING.small}rem`,
    paddingBottom: `${CONTENT_PADDING.small}rem`,
    maxWidth: '85%',
  },
  '.findSections': {
    display: 'flex',
    flexFlow: 'column nowrap',
  },
  '.findSectionItem': {
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  '.links': {
    padding: 0,
    margin: 0,
    display: 'flex',
    flexFlow: 'column nowrap',
  },
  '.linkItems': {
    listStyleType: 'none',
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    marginBottom: '2rem',
  },
  '.linkItems i': {
    fontSize: `${FONT_AWESOME_ICON_SIZE.small}rem`,
    marginBottom: 10,
  },
  '.itemText': {
    display: 'flex',
    flexFlow: 'row nowrap',
    textAlign: 'center',
  },

  '.contactItems': {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    marginBottom: '1rem',
  },
  '.contactItems i': {
    fontSize: `${FONT_AWESOME_ICON_SIZE.small}rem`,
    marginBottom: 10,
  },

  '.contactForm': {
    marginTop: '2rem',
    width: '350px',
    // maxWidth: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  '.contactFormItems': {
    display: 'flex',
    flexFlow: 'column nowrap',
    width: '100%',
  },
  '.contactFormItems label': {
    marginBottom: '0.25rem',
  },
  '.contactFormItems input': {
    marginBottom: '1rem',
  },

  '.contactFormItems textarea': {
    marginBottom: '1rem',
  },

  [BREAKPOINTS.medium]: {
    '.content': {
      fontSize: FONT_SIZE.base,
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
    '.findLinkItems i': {
      fontSize: `${FONT_AWESOME_ICON_SIZE.medium}rem`,
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
    '.findSections': {
      flexFlow: 'row nowrap',
    },
    '.findSectionItem': {
      flexBasis: '50%',
    },
    '.findLinkItems i': {
      fontSize: `${FONT_AWESOME_ICON_SIZE.large}rem`,
    },
  },
};
