import { AnyAction, createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import theCatApi from '../../axios/the-cat-api';
import { HYDRATE } from 'next-redux-wrapper';

interface Uploading {
  status: boolean | null;
  fileName: string;
  srcPreview: string;
  err: string;
  isLoading: boolean;
}

const initialState: Uploading = {
  status: null,
  fileName: '',
  srcPreview: '',
  err: '',
  isLoading: false,
};

export const uploadImage = createAsyncThunk<boolean, File>(
  'uploading/uploadImage',
  async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('sub_id', 'AndriyKostiuk');
    const req = await theCatApi.image.uploadImage(formData);
    return req.status === 201;
  },
);

const uploadingSlice = createSlice({
  name: 'uploading',
  initialState,
  reducers: {
    setStatus(state, action: PayloadAction<boolean | null>) {
      state.status = action.payload;
    },
    setFileName(state, action: PayloadAction<string>) {
      state.fileName = action.payload;
    },
    setSrcPreview(state, action: PayloadAction<string>) {
      state.srcPreview = action.payload;
    },
    setErr(state, action: PayloadAction<string>) {
      state.err = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(uploadImage.pending, (state) => {
      state.isLoading = true;
    })
      .addCase(uploadImage.fulfilled, (state, action) => {
        state.isLoading = false;
        const status = action.payload;
        state.status = status;
        if (status) {
          state.err = '';
          state.fileName = '';
          state.srcPreview = '';
        }
      })
      .addCase(uploadImage.rejected, (state) => {
        state.isLoading = false;
        state.status = false;
        state.err = 'Something went wrong.';
      })
      .addCase(HYDRATE, (state, action: AnyAction) => {
        return {
          ...state,
          ...action.payload.uploading,
        };
      });
  },
});

export default uploadingSlice.reducer;
export const {setStatus, setFileName, setSrcPreview, setErr} = uploadingSlice.actions;
