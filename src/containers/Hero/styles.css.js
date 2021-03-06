import BREAKPOINTS from '../../styles/breakpoint.config';
import { CHARCOAL, CLAY, SMOKE } from '../../styles/colour.config';
import { HERO_IMAGE_SRC } from '../../styles/asset.config';

export default {
  '.container': {
    height: '100vh',
    width: '100%',
    background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${HERO_IMAGE_SRC}) no-repeat center center / auto 100% `, // / fixed / cover
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  '.headerTextPrimary': {
    fontSize: '2.5rem',
    color: SMOKE,
    lineHeight: 1.2,
  },
  '.headerTextSecondary': {
    fontSize: '1.25rem',
    color: SMOKE,
  },
  '.lineBreak': {
    display: 'inline-block',
  },
  '.contactLinks': {
    marginTop: '2.5rem',
    paddingLeft: 0,
  },
  '.contactLinkItems': {
    listStyleType: 'none',
    marginBottom: '1.25rem',
  },
  '.contactLinkItems:last-child': {
    marginBottom: 0,
  },
  '.iconBackground': {
    color: SMOKE,
  },
  '.linkRef:link, .linkRef:visited': {
    color: CHARCOAL,
  },
  '.linkRef:hover, .linkRef:visited:hover': {
    color: CLAY,
  },
  [BREAKPOINTS.medium]: {
    '.container': {
      background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${HERO_IMAGE_SRC}) no-repeat center center / cover`, // / fixed / cover
    },
    '.headerTextPrimary': {
      fontSize: '3.25rem',
    },
    '.headerTextSecondary': {
      fontSize: '1.625rem',
    },
    '.contactLinks': {
      width: 250,
      display: 'flex',
      justifyContent: 'space-around',
      flexFlow: 'row nowrap',
    },
  },
  [BREAKPOINTS.large]: {
    '.headerTextPrimary': {
      fontSize: '4rem',
    },
    '.headerTextSecondary': {
      fontSize: '2rem',
    },
  },
};
