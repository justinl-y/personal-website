export const randomKey = () => (
  Date.now() * Math.random()
);

export const currentYear = () => (
  new Date().getFullYear()
);
