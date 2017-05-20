/* import {
  loadingResource,
  doneLoading,
} from './isLoadingActions';*/

export const LOAD_ABOUT = 'LOAD_ABOUT';

export const loadAbout = data => ({
  type: LOAD_ABOUT,
  payload: data,
});

/* export const fetchAbout = () => (dispatch) => {
  dispatch(loadingResource());
  locationApi.get()
      .then((result) => {
        dispatch(loadLocations(result));
        dispatch(doneLoading());
      })
      .catch(error => console.log(error));
};*/
