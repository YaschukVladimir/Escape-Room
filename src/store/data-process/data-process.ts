import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const/const';
import { DataProcess, DetailedQuest } from '../../types';
import { fetchDetailedQuest, fetchQuestsAction } from '../api-actions';

const initialDetailedQuest: DetailedQuest = {
  id: '',
  title: '',
  previewImg: '',
  previewImgWebp: '',
  level: '',
  type: '',
  peopleMinMax: [],
  description: '',
  coverImg: '',
  coverImgWebp: '',
};

const initialState: DataProcess = {
  quests: [],
  detailedQuest: initialDetailedQuest,
};


export const dataProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchQuestsAction.fulfilled, (state, action) => {
        state.quests = action.payload;
      })
      .addCase(fetchDetailedQuest.fulfilled, (state, action) => {
        state.detailedQuest = action.payload;
      });
  }
});
