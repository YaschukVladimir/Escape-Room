import { NameSpace } from '../../const/const';
import { State } from '../../types';


export const getQuestType = (state: Pick<State, NameSpace.App>): string =>
  state[NameSpace.App].questType;
