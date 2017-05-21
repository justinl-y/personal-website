export const LOAD_START_WORK = 'LOAD_START_WORK';
export const LOAD_END_WORK = 'LOAD_END_WORK';
export const LOAD_WORK = 'LOAD_WORK';

export const loadStart = () => ({
  type: LOAD_START_WORK,
  payload: null,
});

export const loadEnd = () => ({
  type: LOAD_END_WORK,
  payload: null,
});

export const loadWork = data => ({
  type: LOAD_WORK,
  payload: data,
});

export const fetchWork = () => (dispatch) => {
  dispatch(loadStart());
  fetch('../../default-data.json')
    .then(response => (
      response.json()
    ))
    .then((result) => {
      dispatch(loadWork(result.work));
      dispatch(loadEnd());
    });
    // .catch(error => console.log(Error(error)));
};
