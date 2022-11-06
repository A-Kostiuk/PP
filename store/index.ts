import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import votingReducer from './voting-slice/voting-slice';
import breedsReducer from './breeds-slice/breeds-slice';
import breedReducer from './breed-slice/breed-slice';
import galleryReducer from './gallery-slice/gallery-sliice';
import favouritesReducer from './favourites-slice/favourites-slice';
import uploadingReducer from './uploading-slice/uploading-slice';

const combinedReducers = combineReducers({
  voting: votingReducer,
  breeds: breedsReducer,
  breed: breedReducer,
  gallery: galleryReducer,
  favorites: favouritesReducer,
  uploading: uploadingReducer,
});


const reducer: typeof combinedReducers = (state, action) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  } else {
    return combinedReducers(state, action);
  }
};

export const makeStore = () =>
  configureStore({
    reducer,
  });

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export const wrapper = createWrapper<AppStore>(makeStore);
