exports.FONT_AWESOME = {
  '@import': 'url(http://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css)',
};

// Base font size in px.
exports.FONT_SIZE = {
  mobile: 14,
  base: 16,
};

// fonts
/* const OPEN_SANS = {
  name: 'Open Sans',
  url: '@import url(https://fonts.googleapis.com/css?family=Open+Sans|Roboto:300,300i,400,400i,700,700i)',
};*/

const ROBOTO = {
  name: 'Roboto',
  url: {
    '@import': 'url(https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,700,700i)',
  },
};

const MONTSERRAT = {
  name: 'Montserrat',
  url: {
    '@import': 'url(https://fonts.googleapis.com/css?family=Montserrat:800,800i)',
  },
};

const ROBOTO_SLAB = {
  name: 'Roboto Slab',
  url: {
    '@import': 'url(https://fonts.googleapis.com/css?family=Roboto+Slab:700)',
  },
};

/* const HELVETICA = {
  name: 'Helvetica',
  url: null,
};*/

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
  ROBOTO,
  SANS_SERIF,
];

exports.FONT_STACK_HEADING_PRIMARY = [
  ROBOTO_SLAB,
  TIMES_NEW_ROMAN,
];

exports.FONT_STACK_HEADING_SECONDARY = [
  MONTSERRAT,
  SANS_SERIF,
];

exports.FONT_STACK_MONO = [
  'Courier',
  'monospace',
];

// Base line height in rem.
exports.LINE_HEIGHT_BASE = 1.45;
