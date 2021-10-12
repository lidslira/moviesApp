import {action} from 'typesafe-actions';

import {
  UserTypes,
  LoginProps,
  LogoutProps,
  SetInformationUserProps,
  UserProps,
} from './types';

export const loginAction = (email: string, password: string): LoginProps =>
  action(UserTypes.LOGIN, {email, password});

export const logoutAction = (): LogoutProps => action(UserTypes.LOGOUT);

export const informationUserAction = (
  data: UserProps,
): SetInformationUserProps => action(UserTypes.SET_INFORMATION_USER, {data});
