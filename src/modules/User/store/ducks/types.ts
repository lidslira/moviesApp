import {Action} from 'redux';
import {GenderProps} from '~/modules/User/constants';

export enum UserTypes {
  LOGOUT = '@user/LOGOUT',
  LOGIN = '@user/LOGIN',
  SET_INFORMATION_USER = '@user/SET_INFORMATION_USER',
}
export interface UserProps {
  fullName: string;
  email: string;
  country: string;
  birthDate: string;
  imageProfile: string;
  password: string;
  gender: GenderProps;
}

export interface UserState {
  isLoggedIn: boolean;
  currentUser: UserProps;
}

export interface LogoutProps extends Action {
  type: UserTypes.LOGOUT;
}

export interface LoginProps extends Action {
  type: UserTypes.LOGIN;
  payload: {email: string; password: string};
}

export interface SetInformationUserProps extends Action {
  type: UserTypes.SET_INFORMATION_USER;
  payload: {data: UserProps};
}
