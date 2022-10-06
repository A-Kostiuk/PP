import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';
import { Breed } from '../../interfaces/breed';
import theCatApi from '../../axios/the-cat-api';
import { SelectOption } from '../../interfaces/select-option';

interface Breeds {
  isLoading: boolean;
  currentBreeds: Breed[] | null;
  limit: SelectOption;
  page: number;
  allBreeds: SelectOption[];
  selectBreed: SelectOption | null;
}

const initialState: Breeds = {
  isLoading: false,
  currentBreeds: null,
  limit: {value: 10, label: 'Limit: 10'},
  page: 0,
  allBreeds: [],
  selectBreed: null,
};

export const fetchCurrentBreeds = createAsyncThunk<Breed[], void, { state: RootState }>(
  'breeds/fetchCurrentBreeds',
  async (_, {getState}) => {
    const limit = getState().breeds.limit;
    const page = getState().breeds.page;
    const res = await theCatApi.fetchCurrentBreeds(limit.value, page);
    return res.data;
  });

export const fetchAllBreeds = createAsyncThunk<SelectOption[], void>(
  'breeds/fetchAllBreeds',
  async () => {
    const req = await theCatApi.fetchAllBreeds();
    return req.data.map((breed: Breed) => ({value: breed.id, label: breed.name}));
  },
);

const breedsSlice = createSlice({
  name: 'breeds',
  initialState,
  reducers: {
    setLimit(state, action: PayloadAction<SelectOption>) {
      state.limit = action.payload;
      state.page = 0;
      state.selectBreed = null;
    },
    setSelectBreed(state, action: PayloadAction<SelectOption>) {
      state.selectBreed = action.payload;
    },
  },
  extraReducers: (builder => {
    builder.addCase(fetchCurrentBreeds.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCurrentBreeds.fulfilled, (state, action) => {
      state.currentBreeds = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchAllBreeds.fulfilled, (state, action) => {
      state.allBreeds = action.payload;
    });
  }),
});

export const {setLimit, setSelectBreed} = breedsSlice.actions;
export default breedsSlice.reducer;
