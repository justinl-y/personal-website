/* import {
  loadingResource,
  doneLoading,
} from './isLoadingActions';*/

export const LOAD_CONTACT = 'LOAD_CONTACT';

export const loadContact = data => ({
  type: LOAD_CONTACT,
  payload: data,
});

/* export const fetchDo = () => (dispatch) => {
  dispatch(loadingResource());
  locationApi.get()
      .then((result) => {
        dispatch(loadLocations(result));
        dispatch(doneLoading());
      })
      .catch(error => console.log(error));
};*/
