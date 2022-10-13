import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';
import { BreedOption, BreedRequest } from '../../interfaces/breed';
import theCatApi from '../../axios/the-cat-api';
import { SelectOption } from '../../interfaces/select-option';

interface Breeds {
  isLoading: boolean;
  currentBreeds: BreedOption[];
  limit: SelectOption;
  page: number;
  allBreeds: BreedOption[];
  selectBreed: BreedOption | null,
}

const initialState: Breeds = {
  isLoading: false,
  currentBreeds: [],
  limit: {value: 10, label: 'Limit: 10'},
  page: 0,
  allBreeds: [],
  selectBreed: null,
};

export const fetchCurrentBreeds = createAsyncThunk<BreedOption[], void, { state: RootState }>(
  'breeds/fetchCurrentBreeds',
  async (_, {getState}) => {
    const limit = getState().breeds.limit;
    const page = getState().breeds.page;
    const res = await theCatApi.breeds.fetchCurrentBreeds(limit.value, page);
    return res.data;
  });


export const fetchAllBreeds = createAsyncThunk<BreedOption[], void>(
  'breeds/fetchAllBreeds',
  async () => {
    const req = await theCatApi.breeds.fetchAllBreeds();
    return req.data.map((breed: BreedRequest) => ({value: breed.id, label: breed.name, ...breed}));
  },
);

const breedsSlice = createSlice({
  name: 'breeds',
  initialState,
  reducers: {
    setLimit(state, action: PayloadAction<SelectOption>) {
      state.limit = action.payload;
      state.page = 0;
      state.currentBreeds = state.allBreeds.slice(0, Number(action.payload.value));

    },
    setSelectBreed(state, action: PayloadAction<BreedOption | null>) {
      state.selectBreed = action.payload;
    },
  },
  extraReducers: (builder => {
    builder.addCase(fetchAllBreeds.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAllBreeds.fulfilled, (state, action) => {
      state.allBreeds = action.payload;
      state.isLoading = false;
      state.currentBreeds = action.payload.slice(0, Number(state.limit.value));
    });
  }),
});

export const {setLimit, setSelectBreed} = breedsSlice.actions;
export default breedsSlice.reducer;
