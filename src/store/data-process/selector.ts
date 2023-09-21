import { NameSpace } from '../../const/const';
import { BookingInfo, DetailedQuest, Quest, QuestFormData, ReservedQuest, State } from '../../types';


export const getQuests = (state: Pick <State, NameSpace.Data>): Quest[] =>
  state[NameSpace.Data].quests;

export const getDetailedQuest = (state: Pick <State, NameSpace.Data>): DetailedQuest =>
  state[NameSpace.Data].detailedQuest;

export const getBookingQuestInfo = (state: Pick <State, NameSpace.Data>): BookingInfo[] =>
  state[NameSpace.Data].bookingInfo;

export const getBookingInfoLoadingStatus = (state: Pick<State, NameSpace.Data>): boolean =>
  state[NameSpace.Data].isBookingInfoLoaded;

export const getSelectedQuestPlaceId = (state: Pick<State, NameSpace.Data>): string =>
  state[NameSpace.Data].selectedQuestPlaceId;

export const getSelectedQuestPlace = (state: Pick<State, NameSpace.Data>): BookingInfo =>
  state[NameSpace.Data].selectedQuestPlace;

export const getIsWithChildrenFormData = (state: Pick<State, NameSpace.Data>): boolean =>
  state[NameSpace.Data].questFormData.withChildren;

export const getQuestFormData = (state: Pick<State, NameSpace.Data>): QuestFormData =>
  state[NameSpace.Data].questFormData;

export const getReservedQuests = (state: Pick<State, NameSpace.Data>): ReservedQuest[] =>
  state[NameSpace.Data].reservedQuests;
