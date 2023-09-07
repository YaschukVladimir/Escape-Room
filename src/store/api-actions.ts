import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiRoute } from '../const/const';
import { AppDispatch, AuthData, DetailedQuest, Quest, State, UserData } from '../types';
import { AxiosInstance } from 'axios';
import { dropToken, saveToken } from '../services/token';
import { setUserData } from './user-process/user-process';


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

export const loginAction = createAsyncThunk<void, AuthData, {
  dispath: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>('Login',
  async({email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserData>(ApiRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(setUserData(data));
  }
);

export const checkAuthAction = createAsyncThunk<UserData, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>('REQUIRE_AUTHORIZATION',
  async (_arg, {dispatch, extra: api }) => {
    const {data} = await api.get<UserData>(ApiRoute.Login);
    dispatch(setUserData(data));
    return data;
  });

export const logoutAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'LOGOUT',
    async (_arg, { extra: api}) => {
      await api.delete(ApiRoute.Logout);
      dropToken();
    }
  );
