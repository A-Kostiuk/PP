import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ActionLog } from '../../interfaces/actionLog';
import TheCatApi from '../../axios/the-cat-api';
import { VotingPicture } from '../../interfaces/voting-picture';
import dayjs from 'dayjs';
import { AppDispatch } from '../index';

interface IInitialState {
  votingPicture: VotingPicture,
  actionLogs: ActionLog[],
  isLoading: boolean
}

const initialState: IInitialState = {
  votingPicture: {
    id: '',
    url: '',
  },
  actionLogs: [],
  isLoading: false,
};

export const fetchVotingPicture = createAsyncThunk<VotingPicture, void>(
  'voting/fetchPicture',
  async () => {
    const res = await TheCatApi.voting.fetchVotingPicture();
    return res.data[0];
  },
);

export const like = createAsyncThunk<void, string, { dispatch: AppDispatch }>(
  'voting/like',
  async (id, {dispatch}) => {
    await TheCatApi.voting.postVoting({
      image_id: id,
      sub_id: 'AndriyKostiuk',
      value: 1,
    });
    const actionLog = {
      time: dayjs().format('HH:mm'),
      imageId: id,
      iconId: 'like',
      from: 'Likes',
    };
    dispatch(addActionLog(actionLog));
    dispatch(fetchVotingPicture());
  },
);

export const dislike = createAsyncThunk<void, string, { dispatch: AppDispatch }>(
  'voting/dislike',
  async (id, {dispatch}) => {
    await TheCatApi.voting.postVoting({
      image_id: id,
      sub_id: 'AndriyKostiuk',
      value: -1,
    });
    const actionLog = {
      time: dayjs().format('HH:mm'),
      imageId: id,
      iconId: 'dislike',
      from: 'Dislikes',
    };
    dispatch(addActionLog(actionLog));
    dispatch(fetchVotingPicture());
  },
);

export const favorite = createAsyncThunk<void, string, { dispatch: AppDispatch }>(
  'voting/favorite',
  async (id, {dispatch}) => {
    await TheCatApi.voting.postFavorite({
      image_id: id,
      sub_id: 'AndriyKostiuk',
    });
    const actionLog = {
      time: dayjs().format('HH:mm'),
      imageId: id,
      iconId: 'favorite',
      from: 'Favorites',
    };
    dispatch(addActionLog(actionLog));
    dispatch(fetchVotingPicture());
  },
);


const votingSlice = createSlice({
  name: 'voting',
  initialState,
  reducers: {
    addActionLog(state, action: PayloadAction<ActionLog>) {
      state.actionLogs.push({
        time: action.payload.time,
        imageId: action.payload.imageId,
        from: action.payload.from,
        iconId: action.payload.iconId,
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchVotingPicture.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchVotingPicture.fulfilled, (state, action: PayloadAction<VotingPicture>) => {
      state.isLoading = false;
      state.votingPicture = action.payload;
    });
  },
});

export default votingSlice.reducer;

export const {addActionLog} = votingSlice.actions;
