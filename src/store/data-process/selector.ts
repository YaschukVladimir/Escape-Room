import { NameSpace } from '../../const/const';
import { Quest, State } from '../../types';


export const getQuests = (state: Pick <State, NameSpace.Data>): Quest[] =>
  state[NameSpace.Data].quests;
