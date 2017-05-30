export const LOAD_START_FIND = 'LOAD_START_FIND';
export const LOAD_END_FIND = 'LOAD_END_FIND';
export const LOAD_FIND = 'LOAD_FIND';

export const loadStart = () => ({
  type: LOAD_START_FIND,
  payload: null,
});

export const loadEnd = () => ({
  type: LOAD_END_FIND,
  payload: null,
});

export const loadFind = data => ({
  type: LOAD_FIND,
  payload: data,
});

export const fetchFind = () => (dispatch) => {
  dispatch(loadStart());
  return fetch('../../default-data.json')
    .then(response => (
      response.json()
    ))
    .then((result) => {
      dispatch(loadFind(result.find));
      dispatch(loadEnd());
    });
    // .catch(error => console.log(Error(error)));
};
