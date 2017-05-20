/* import {
  loadingResource,
  doneLoading,
} from './isLoadingActions';*/

export const LOAD_HERO = 'LOAD_HERO';

export const loadHero = data => ({
  type: LOAD_HERO,
  payload: data,
});

/* export const fetchHero = () => (dispatch) => {
  dispatch(loadingResource());
  locationApi.get()
      .then((result) => {
        dispatch(loadLocations(result));
        dispatch(doneLoading());
      })
      .catch(error => console.log(error));
};*/
