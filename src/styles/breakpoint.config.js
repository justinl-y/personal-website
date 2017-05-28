const BREAKPOINTS = {
  SMALL: { max: 480 },
  MEDIUM: { min: 481, max: 900 },
  LARGE: { min: 901 },
};

const smallBreakPoint = `@media (max-width: ${BREAKPOINTS.SMALL.max}px)`;
const mediumBreakPoint = `@media (min-width: ${BREAKPOINTS.MEDIUM.min}px)`;
const largeBreakPoint = `@media (min-width: ${BREAKPOINTS.LARGE.min}px)`;

module.exports = {
  small: smallBreakPoint,
  medium: mediumBreakPoint,
  large: largeBreakPoint,
};
