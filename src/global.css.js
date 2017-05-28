import {
  CHARCOAL,
  LILAC,
} from './styles/colour.config';
import {
  FONT_AWESOME,
  FONT_SIZE,
  FONT_STACK_BASE,
  FONT_STACK_HEADING,
  LINE_HEIGHT_BASE,
} from './styles/typography.config';
// import { anchorColor } from '/util/css.util';

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
    color: LILAC,
    fontFamily: FONT_STACK_HEADING.map(font => font.name).join(','),
    fontWeight: 400,
    // fontWeight: 'inherit',
    // margin: '1.414rem 0 0.5rem',
    lineHeight: `${LINE_HEIGHT_BASE}rem`,
  },
  h1: {
    // fontSize: '2rem',
  },
  h2: {
    // fontSize: '1.5rem',
  },
  h3: {
    // fontSize: '1.125rem',
  },
  h4: {
    // fontSize: '1.333rem',
  },
  a: {
    // ...anchorColor(LILAC),
    textDecoration: 'none',
  },
}];
