import {
  TITLE_PADDING,
  CONTENT_PADDING,
  CONTAINER_WIDTH,
} from '../../styles/layout.config';
import BREAKPOINTS from '../../styles/breakpoint.config';
import { FONT_SIZE, FONT_AWESOME_ICON_SIZE, FONT_SIZE_HEADING } from '../../styles/typography.config';
import { WORK_IMAGE_SRC } from '../../styles/asset.config';
import { SMOKE, CLAY, CHARCOAL } from '../../styles/colour.config';

export default {
  '.component': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: CHARCOAL,
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
  '.content': {
    paddingTop: `${CONTENT_PADDING.small}rem`,
    paddingBottom: `${CONTENT_PADDING.small}rem`,
  },
  '.work': {
    display: 'flex',
    flexFlow: 'column nowrap',
    // textAlign: 'center',
  }, // <---

  '.workItem': {
    // display: 'flex',
    // flexFlow: 'column nowrap',
    border: `1px solid ${CLAY}`,
    // padding: '1rem, 0.5rem',
    // display: 'flex',
    // alignItems: 'flex-start',
    // justifyContent: 'flex-start',
    // flexBasis: '50%',
    // overflow: 'hidden',
    // backgroundColor: CHARCOAL,
  },

  '.workContainer': {
    // width: '100%',
    // height: '90%',
    // padding: '1rem',
    // flexFlow: 'column nowrap',
    // flexBasis: '50%',
    // flex: '0 1 50%',
    // display: 'flex',
    height: '100%',
    backgroundColor: CHARCOAL,
    padding: '1rem',
  },

  '.workItemImage': {
    // flex: '0 0 50%',
    display: 'flex',
    flexFlow: 'column nowrap',
    // height: '100%',
  },
  '.itemImage': {
    flex: '0 0 50%',
    height: '100%',
    paddingTop: `${CONTENT_PADDING.small}rem`,
    paddingBottom: `${CONTENT_PADDING.small}rem`,
    display: 'flex',
    justifyContent: 'center',
    // height: '100%',
  },
  '.itemImage h3': {
    color: SMOKE,
  },

  '.workItemText': {
    flex: '0 0 50%',
    // display: 'flex',
    height: '100%',
    // fontSize: '0.5rem',
    // paddingBottom: '1rem',
    // overflow: 'hidden',
    padding: '1rem',
    color: CLAY,
  },
  '.workItemText h4': {
    marginTop: '1rem',
    marginBottom: '1rem',
    textAlign: 'center',
    color: SMOKE,
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
    '.work': {
      flexFlow: 'row wrap',
    },
    '.workItem': {
      flexBasis: '50%',
    }, // <---
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
    }, // <---

    '.itemImage': {
      paddingTop: `${CONTENT_PADDING.large}rem`,
      paddingBottom: `${CONTENT_PADDING.large}rem`,
    },
  },
};
