exports.FONT_AWESOME = {
  '@import': 'url(http://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css)',
};

// Base font size in px.
exports.FONT_SIZE = {
  mobile: 14,
  base: 16,
};

// fonts
const ROBOTO = {
  name: 'Roboto',
  url: {
    '@import': 'url(https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,700,700i)',
  },
};

const SANS_SERIF = {
  name: 'sans-serif',
  url: null,
};

const IMPACT = {
  name: 'impact',
  url: null,
};

// font constants
exports.FONT_STACK_BASE = [
  ROBOTO,
  SANS_SERIF,
];

exports.FONT_STACK_HEADING = [
  IMPACT,
  SANS_SERIF,
];

exports.FONT_STACK_MONO = [
  'Courier',
  'monospace',
];

// Base line height in rem.
exports.LINE_HEIGHT_BASE = 1.45;
