export const anchorColour = (colour, hover = colour, visited = colour) => ({
  '&': { colour },
  '&:hover, &:visited:hover': { color: hover },
  '&:visited': { color: visited },
});