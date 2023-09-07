import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const/const';
import { DataProcess } from '../../types';
import { fetchQuestsAction } from '../api-actions';

const initialState: DataProcess = {
  quests: [],
};


export const dataProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchQuestsAction.fulfilled, (state, action) => {
      state.quests = action.payload;
    });
  }
});
