/* import {
  loadingResource,
  doneLoading,
} from './isLoadingActions';*/

export const LOAD_WORK = 'LOAD_WORK';

export const loadWork = data => ({
  type: LOAD_WORK,
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
