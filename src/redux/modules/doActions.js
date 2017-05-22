export const LOAD_START_DO = 'LOAD_START_DO';
export const LOAD_END_DO = 'LOAD_END_DO';
export const LOAD_DO = 'LOAD_DO';

export const loadStart = () => ({
  type: LOAD_START_DO,
  payload: null,
});

export const loadEnd = () => ({
  type: LOAD_END_DO,
  payload: null,
});

export const loadDo = data => ({
  type: LOAD_DO,
  payload: data,
});

export const fetchDo = () => (dispatch) => {
  dispatch(loadStart());
  return fetch('../../default-data.json')
    .then(response => (
      response.json()
    ))
    .then((result) => {
      dispatch(loadDo(result.do));
      dispatch(loadEnd());
    });
    // .catch(error => console.log(Error(error)));
};
