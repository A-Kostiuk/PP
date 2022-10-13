import { RootState } from './index';

export const selectVoting = (state: RootState) => state.voting;
export const selectBreeds = (state: RootState) => state.breeds;
export const selectBreed = (state: RootState) => state.breed;
