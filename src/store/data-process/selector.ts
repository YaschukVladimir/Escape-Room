import { NameSpace } from '../../const/const';
import { DetailedQuest, Quest, State } from '../../types';


export const getQuests = (state: Pick <State, NameSpace.Data>): Quest[] =>
  state[NameSpace.Data].quests;

export const getDetailedQuest = (state: Pick <State, NameSpace.Data>): DetailedQuest =>
  state[NameSpace.Data].detailedQuest;
