import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiRoute } from '../const/const';
import { AppDispatch, AuthData, BookingInfo, DetailedQuest, PostData, Quest, ReservedQuest, State, UserData } from '../types';
import { AxiosInstance } from 'axios';
import { dropToken, saveToken } from '../services/token';
import { setUserData } from './user-process/user-process';
import { setFormPlaceId, setSelectedQuestPlace } from './data-process/data-process';


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

export const fetchBookingQuestInfo = createAsyncThunk<BookingInfo[], DetailedQuest['id'], {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>('quests/fetchBookingQuestInfo',
  async(id, {dispatch, extra: api }) => {
    const {data} = await api.get<BookingInfo[]>(`${ApiRoute.Booking}/${id}/booking`);
    dispatch(fetchDetailedQuest(id));
    dispatch(setSelectedQuestPlace(data[0]));
    dispatch(setFormPlaceId(data[0].id));
    return data;
  });

export const postFormData = createAsyncThunk<PostData, PostData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>('postFormData',
  async({postData, id}, {extra: api}) => {
    const {data} = await api.post<PostData>(`${ApiRoute.Booking}/${id}/booking`, postData);
    return data;
  }
);

export const fetchReservedQuests = createAsyncThunk<ReservedQuest[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>('fetchReservedQuests',
  async(_arg, {extra: api}) => {
    const {data} = await api.get<ReservedQuest[]>(ApiRoute.MyQuests);
    return data;
  }
);

export const deleteReservedQuest = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>('deleteReservedQuest',
  async(id, {dispatch, extra: api}) => {
    await api.delete<void>(`${ApiRoute.MyQuests}/${id}`);
    dispatch(fetchReservedQuests());
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
