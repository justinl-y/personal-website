export const LOAD_START_KNOW = 'LOAD_START_KNOW';
export const LOAD_END_KNOW = 'LOAD_END_KNOW';
export const LOAD_KNOW = 'LOAD_KNOW';

export const loadStart = () => ({
  type: LOAD_START_KNOW,
  payload: null,
});

export const loadEnd = () => ({
  type: LOAD_END_KNOW,
  payload: null,
});

export const loadKnow = data => ({
  type: LOAD_KNOW,
  payload: data,
});

export const fetchKnow = () => (dispatch) => {
  dispatch(loadStart());
  return fetch('../../default-data.json')
    .then(response => (
      response.json()
    ))
    .then((result) => {
      dispatch(loadKnow(result.know));
      dispatch(loadEnd());
    });
    // .catch(error => console.log(Error(error)));
};
