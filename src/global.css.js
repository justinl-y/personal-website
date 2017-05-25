import {
  CHARCOAL,
  // LILAC,
} from './styles/colour.config';
import {
  FONT_AWESOME,
  FONT_SIZE,
  BASE_FONT_STACK,
  BASE_LINE_HEIGHT,
} from './styles/typography.config';
// import { anchorColor } from '/util/css.util';

export default [{
  /**
   * Ensure content spans at least the size of the browser window.
   * See: http://codepen.io/absolutholz/post/html-and-body-element-height-100
   * ========================================================================
   */
  // '@import': 'url(https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css)',
  ...FONT_AWESOME,
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
    fontFamily: BASE_FONT_STACK.join(', '),
    fontWeight: 100,
    fontSize: FONT_SIZE.small,
    lineHeight: `${BASE_LINE_HEIGHT}rem`,
  },
  'h1, h2, h3, h4': {
    fontFamily: BASE_FONT_STACK.join(', '),
    fontWeight: 400,
    // fontWeight: 'inherit',
    margin: '1.414rem 0 0.5rem',
    lineHeight: '1.2',
  },
  h1: {
    fontSize: '3.157rem',
  },
  h2: {
    fontSize: '2.369rem',
  },
  h3: {
    fontSize: '1.777rem',
  },
  h4: {
    fontSize: '1.333rem',
  },
  a: {
    // ...anchorColor(LILAC),
    textDecoration: 'none',
  },
}];
