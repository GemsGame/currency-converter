import {createSlice} from '@reduxjs/toolkit';

export interface IState {
  account: 'free' | 'premium';
  init_time: number;
  free_queries: number;
  free_recognitions: number;
}

const initialState: IState = {
  account: 'free', // user
  init_time: Date.now(), //user
  free_queries: 99, //user
  free_recognitions: 4,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeAccount(state, action) {
      state.account = action.payload;
    },
    changeFreeQueries(state) {
      state.free_queries > 0 ? (state.free_queries -= 1) : null;
    },
    changeFreeRecognitions(state) {
      state?.free_recognitions > 0 ? (state.free_recognitions -= 1) : null;
    },
    updateFreeQueries(state) {
      if (
        Date.now() - state.init_time >= 86400 * 1000
      ) {
        state.free_queries = 99;
        state.free_recognitions = 4;
        state.init_time = Date.now();
      }
    },
  },
});

export const {
  changeAccount,
  updateFreeQueries,
  changeFreeQueries,
  changeFreeRecognitions,
} = userSlice.actions;
export default userSlice.reducer;
