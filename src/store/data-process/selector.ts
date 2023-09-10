import { NameSpace } from '../../const/const';
import { BookingInfo, DetailedQuest, Quest, State } from '../../types';


export const getQuests = (state: Pick <State, NameSpace.Data>): Quest[] =>
  state[NameSpace.Data].quests;

export const getDetailedQuest = (state: Pick <State, NameSpace.Data>): DetailedQuest =>
  state[NameSpace.Data].detailedQuest;

export const getBookingQuestInfo = (state: Pick <State, NameSpace.Data>): BookingInfo[] =>
  state[NameSpace.Data].bookingInfo;

export const getBookingInfoLoadingStatus = (state: Pick<State, NameSpace.Data>): boolean =>
  state[NameSpace.Data].isBookingInfoLoaded;
