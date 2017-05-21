export const LOAD_START_ABOUT = 'LOAD_START_ABOUT';
export const LOAD_END_ABOUT = 'LOAD_END_ABOUT';
export const LOAD_ABOUT = 'LOAD_ABOUT';

export const loadStart = () => ({
  type: LOAD_START_ABOUT,
  payload: null,
});

export const loadEnd = () => ({
  type: LOAD_END_ABOUT,
  payload: null,
});

export const loadAbout = data => ({
  type: LOAD_ABOUT,
  payload: data,
});

export const fetchAbout = () => (dispatch) => {
  dispatch(loadStart());
  fetch('../../default-data.json')
    .then(response => (
      response.json()
    ))
    .then((result) => {
      dispatch(loadAbout(result.about));
      dispatch(loadEnd());
    });
    // .catch(error => console.log(Error(error)));
};
