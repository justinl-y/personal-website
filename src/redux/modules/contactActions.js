export const LOAD_START_CONTACT = 'LOAD_START_CONTACT';
export const LOAD_END_CONTACT = 'LOAD_END_CONTACT';
export const LOAD_CONTACT = 'LOAD_CONTACT';

export const loadStart = () => ({
  type: LOAD_START_CONTACT,
  payload: null,
});

export const loadEnd = () => ({
  type: LOAD_END_CONTACT,
  payload: null,
});

export const loadContact = data => ({
  type: LOAD_CONTACT,
  payload: data,
});

export const fetchContact = () => (dispatch) => {
  dispatch(loadStart());
  return fetch('../../default-data.json')
    .then(response => (
      response.json()
    ))
    .then((result) => {
      dispatch(loadContact(result.contact));
      dispatch(loadEnd());
    });
    // .catch(error => console.log(Error(error)));
};
