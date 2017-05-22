export const LOAD_START_HERO = 'LOAD_START_HERO';
export const LOAD_END_HERO = 'LOAD_END_HERO';
export const LOAD_HERO = 'LOAD_HERO';

export const loadStart = () => ({
  type: LOAD_START_HERO,
  payload: null,
});

export const loadEnd = () => ({
  type: LOAD_END_HERO,
  payload: null,
});

export const loadHero = data => ({
  type: LOAD_HERO,
  payload: data,
});

export const fetchHero = () => (dispatch) => {
  dispatch(loadStart());
  return fetch('../../default-data.json')
    .then(response => (
      response.json()
    ))
    .then((result) => {
      dispatch(loadHero(result.hero));
      dispatch(loadEnd());
    });
    // .catch(error => console.log(Error(error)));
};
