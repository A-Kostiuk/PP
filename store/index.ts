import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import votingReducer from './voting-slice/voting-slice';
import breedsReducer from './breeds-slice/breeds-slice';

const rootReducer = combineReducers({
  voting: votingReducer,
  breeds: breedsReducer,
});

const makeStore = () => configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export const store = makeStore();

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export const wrapper = createWrapper<AppStore>(makeStore);
