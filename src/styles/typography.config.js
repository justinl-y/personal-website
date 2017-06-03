exports.FONT_AWESOME = {
  name: 'Font Awesome',
  url: {
    '@import': 'url(//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css)',
  },
};

exports.FONT_AWESOME_ICON_SIZE = {
  small: 2.5,
  medium: 3,
  large: 3.5,
};

// Base font size in px.
exports.FONT_SIZE = {
  mobile: 14,
  base: 16,
};

exports.FONT_SIZE_HEADING = {
  small: 2,
  medium: 2.5,
  large: 3,
};

// fonts
const RALEWAY = {
  name: 'Raleway',
  url: {
    '@import': 'url(//fonts.googleapis.com/css?family=Raleway:400,400i,700,700i)',
  },
};

const MONTSERRAT = {
  name: 'Montserrat',
  url: {
    '@import': 'url(//fonts.googleapis.com/css?family=Montserrat:800,800i)',
  },
};

const ROBOTO_SLAB = {
  name: 'Roboto Slab',
  url: {
    '@import': 'url(//fonts.googleapis.com/css?family=Roboto+Slab:700)',
  },
};

const SANS_SERIF = {
  name: 'sans-serif',
  url: null,
};

const TIMES_NEW_ROMAN = {
  name: 'Times New Roman',
  url: null,
};

// font constants
exports.FONT_STACK_BASE = [
  RALEWAY,
  SANS_SERIF,
];

exports.FONT_STACK_HEADING_PRIMARY = [
  MONTSERRAT,
  SANS_SERIF,
];

exports.FONT_STACK_HEADING_SECONDARY = [
  ROBOTO_SLAB,
  TIMES_NEW_ROMAN,
];

exports.FONT_STACK_MONO = [
  'Courier',
  'monospace',
];

// Base line height in rem.
exports.LINE_HEIGHT_BASE = 1.45;
