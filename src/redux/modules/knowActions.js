/* import {
  loadingResource,
  doneLoading,
} from './isLoadingActions';*/

export const LOAD_KNOW = 'LOAD_KNOW';

export const loadKnow = data => ({
  type: LOAD_KNOW,
  payload: data,
});

/* export const fetchKnow = () => (dispatch) => {
  dispatch(loadingResource());
  locationApi.get()
      .then((result) => {
        dispatch(loadLocations(result));
        dispatch(doneLoading());
      })
      .catch(error => console.log(error));
};*/
