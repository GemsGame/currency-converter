import {createSlice} from '@reduxjs/toolkit';


export type ModelType = 'ai0' | 'ai1' | 'ai2' | 'ai3' | 'ai4' | 'ai5' | 'ai6' | '__savior_1' | '__savior_2';

export interface IModel {
  model: {
    visible: ModelType,
    used: ModelType,
  }
}

export const initialState: IModel = {
  model: {
    visible: 'ai0',
    used: 'ai0',
  },
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    changeModel(state, action) {
      state.model = action.payload;
    },
  },
});

export const {changeModel} = settingsSlice.actions;
export default settingsSlice.reducer;
