import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiRoute } from '../const/const';
import { AppDispatch, DetailedQuest, Quest, State } from '../types';
import { AxiosInstance } from 'axios';


export const fetchQuestsAction = createAsyncThunk<Quest[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>('quests/fetchQuests',
  async(_arg, { extra: api}) => {
    const {data} = await api.get<Quest[]>(ApiRoute.GetQuests);
    return data;
  }
);

export const fetchDetailedQuest = createAsyncThunk<DetailedQuest, DetailedQuest['id'], {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>('quests/fetchDetailedQuest',
  async (id, { extra: api }) => {
    const {data} = await api.get<DetailedQuest>(`${ApiRoute.GetDetailedQuest}/${id}`);
    return data;
  }
);
