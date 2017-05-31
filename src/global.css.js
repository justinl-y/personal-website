import {
  CHARCOAL,
  WHITE,
  CLAY,
  SMOKE,
  // BONDI,
} from './styles/colour.config';
import {
  FONT_AWESOME,
  FONT_SIZE,
  FONT_STACK_BASE,
  FONT_STACK_HEADING_PRIMARY,
  FONT_STACK_HEADING_SECONDARY,
  LINE_HEIGHT_BASE,
} from './styles/typography.config';

const anchorColour = (colour, hover = colour, visited = colour) => ({
  '&': { colour },
  '&:hover, &:visited:hover': { color: hover },
  '&:visited': { color: visited },
});

export default [{
  /**
   * Ensure content spans at least the size of the browser window.
   * See: http://codepen.io/absolutholz/post/html-and-body-element-height-100
   * ========================================================================
   */
  ...FONT_AWESOME,
  ...FONT_STACK_BASE
      .filter(font => font.url !== null)
      .map(font => `${font.url};`),
  ...FONT_STACK_HEADING_PRIMARY
      .filter(font => font.url !== null)
      .map(font => `${font.url};`),
  ...FONT_STACK_HEADING_SECONDARY
      .filter(font => font.url !== null)
      .map(font => `${font.url};`),
  html: {
    height: '100%',
  },
  body: {
    minHeight: '100%',
  },
}, {
  /**
   * Consistent `box-sizing`.
   * See: http://www.paulirish.com/2012/box-sizing-border-box-ftw/
   * ========================================================================
   */
  html: {
    boxSizing: 'border-box',
  },
  '*, *:before, *:after': {
    boxSizing: 'inherit',
  },
}, {
  'html, body': {
    color: CHARCOAL,
    fontFamily: FONT_STACK_BASE.map(font => font.name).join(','),
    fontWeight: 300,
    fontSize: FONT_SIZE.mobile,
    lineHeight: `${LINE_HEIGHT_BASE}rem`,
  },
  'h1, h2, h3, h4': {
    color: CHARCOAL,
    fontFamily: FONT_STACK_HEADING_PRIMARY.map(font => font.name).join(','),
    fontWeight: 700,
    // fontWeight: 'inherit',
    // margin: '1.414rem 0 0.5rem',
    lineHeight: `${LINE_HEIGHT_BASE}rem`,
  },
  h1: {
    // fontSize: '2.5rem',
  },
  h2: {
    fontSize: '2.5rem',
    color: `${SMOKE}`,
  },
  h3: {
    // fontSize: '1.125rem',
  },
  h4: {
    // fontSize: '1.333rem',
  },
  a: {
    ...anchorColour(WHITE, SMOKE, CLAY),
    textDecoration: 'none',
  },
}];
