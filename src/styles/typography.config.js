const ROBERTO_MEDIUM = {
  '@import': 'url(https://fonts.googleapis.com/css?family=Roboto:100, 100i,300,300i,400,400i,700,700i)',
};

exports.FONT_AWESOME = {
  '@import': 'url(https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css)',
};

// Base font size in px.
exports.FONT_SIZE = {
  small: 14,
  medium: 16,
  large: 18,
};

exports.BASE_FONT_STACK = [
  ROBERTO_MEDIUM,
  'sans-serif',
];

exports.HEADING_FONT_STACK = [
  'impact',
  'sans-serif',
];

exports.MONO_FONT_STACK = [
  'Courier',
  'monospace',
];

// Base line height in rem.
// export const BASE_LINE_HEIGHT = 2;
exports.BASE_LINE_HEIGHT = 1.45;

// Scale factor between each heading size, i.e. h1 size = FACTOR * h2 size.
// export const HEADING_SCALE_FACTOR = 1.618;
/*
// Array of heading font sizes in rem. From h1 to h4.
export const HEADING_FONT_SIZE =
  times((i) => Math.pow(HEADING_SCALE_FACTOR, i), 4).reverse();

// Array of heading line counts. From h1 to h4.
export const HEADING_LINES =
  map((size) => Math.ceil(size / BASE_LINE_HEIGHT + 0.1), HEADING_FONT_SIZE);

// Array of heading line heights in rem. From h1 to h4.
export const HEADING_LINE_HEIGHT =
  map((lines) => lines * BASE_LINE_HEIGHT, HEADING_FONT_SIZE);

// Array of heading top margins in rem. From h1 to h4.
export const HEADING_MARGIN_TOP = map(() => BASE_LINE_HEIGHT, HEADING_LINES);

// Array of heading bottom margins in rem. From h1 to h4.
export const HEADING_MARGIN_BOTTOM =
  map(
    (lines) => Math.min(1, Math.max(0, lines - 1)) * BASE_LINE_HEIGHT,
    HEADING_LINES,
);
*/
