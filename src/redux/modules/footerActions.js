export const LOAD_START_FOOTER = 'LOAD_START_FOOTER';
export const LOAD_END_FOOTER = 'LOAD_END_FOOTER';
export const LOAD_FOOTER = 'LOAD_FOOTER';

export const loadStart = () => ({
  type: LOAD_START_FOOTER,
  payload: null,
});

export const loadEnd = () => ({
  type: LOAD_END_FOOTER,
  payload: null,
});

export const loadFooter = data => ({
  type: LOAD_FOOTER,
  payload: data,
});

export const fetchFooter = () => (dispatch) => {
  dispatch(loadStart());
  return fetch('../../default-data.json')
    .then(response => (
      response.json()
    ))
    .then((result) => {
      dispatch(loadFooter(result.footer));
      dispatch(loadEnd());
    });
    // .catch(error => console.log(Error(error)));
};
