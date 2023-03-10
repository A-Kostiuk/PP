import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import votingReducer from './voting-slice/voting-slice';
import breedsReducer from './breeds-slice/breeds-slice';
import galleryReducer from './gallery-slice/gallery-slice';
import favoritesReducer from './favorites-slice/favorites-slice';
import uploadingReducer from './uploading-slice/uploading-slice';
import searchReducer from './search-slice/search-slice';

const combinedReducers = combineReducers({
  voting: votingReducer,
  breeds: breedsReducer,
  gallery: galleryReducer,
  favorites: favoritesReducer,
  uploading: uploadingReducer,
  search: searchReducer,
});


const reducer: typeof combinedReducers = (state, action) => {
  return combinedReducers(state, action);
};

const store = configureStore({
    reducer,
    devTools: true,
  },
);

const makeStore = () => store;

type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export const wrapper = createWrapper<AppStore>(makeStore);
