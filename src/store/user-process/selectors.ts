import { AuthorizationStatus, NameSpace } from '../../const/const';
import { State } from '../../types';


export const getAuthStatus = (state: State): AuthorizationStatus =>
  state[NameSpace.User].authorizationStatus;
