import { RootState } from './index';

export const selectVoting = (state: RootState) => state.voting;
export const selectBreeds = (state: RootState) => state.breeds;
export const selectBreed = (state: RootState) => state.breed;
export const selectGallery = (state: RootState) => state.gallery;
export const selectFavorites = (state: RootState) => state.favorites;
export const selectUploading = (state: RootState) => state.uploading;
