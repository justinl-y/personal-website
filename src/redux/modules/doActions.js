/* import {
  loadingResource,
  doneLoading,
} from './isLoadingActions';*/

export const LOAD_DO = 'LOAD_DO';

export const loadDo = data => ({
  type: LOAD_DO,
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
