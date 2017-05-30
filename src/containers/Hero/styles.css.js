import BREAKPOINTS from '../../styles/breakpoint.config';
import { WHITE, CHARCOAL, CLAY } from '../../styles/colour.config';
import { HERO_IMAGE_SRC } from '../../styles/asset.config';

export default {
  '.component': {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
      url(${HERO_IMAGE_SRC}) repeat-x center center / cover`,
  },
  '.headerTextPrimary': {
    fontSize: '3rem',
    color: WHITE,
    lineHeight: 1,
  },
  '.headerTextSecondary': {
    fontSize: '1.5rem',
    color: WHITE,
  },
  '.lineBreak': {
    display: 'inline-block',
  },
  '.contactLinks': {
    marginTop: '3rem',
    paddingLeft: 0,
  },
  '.contactLinkItems': {
    listStyleType: 'none',
    marginBottom: '1.5rem',
  },
  '.contactLinkItems:last-child': {
    marginBottom: 0,
  },
  '.iconBackground': {
    color: 'white',
  },
  '.linkRef:link': {
    color: CHARCOAL,
  },
  '.linkRef:hover': {
    color: CLAY,
  },
  '.linkRef:visited': {
    color: CHARCOAL,
  },
  '.linkRef:visited:hover': {
    color: CLAY,
  },
  [BREAKPOINTS.medium]: {
    '.headerTextPrimary': {
      fontSize: '4rem',
      color: WHITE,
    },
    '.headerTextSecondary': {
      fontSize: '2rem',
      color: WHITE,
    },
    '.contactLinks': {
      width: 250,
      display: 'flex',
      justifyContent: 'space-around',
      flexFlow: 'row nowrap',
    },
  },
  [BREAKPOINTS.large]: {
  },
};
