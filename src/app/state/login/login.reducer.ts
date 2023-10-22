import { createReducer, on } from '@ngrx/store';
import {
  logInAction,
  logOutAction,
  logInSuccesAction,
  logOutSuccesAction,
  logOutErrorAction,
  logInErrorAction,
} from './login.actions';

export type LoginState = {
  username: string | null;
  loggedIn: boolean;
  error: string | null;
  pending: boolean;
};

export const initialState: LoginState = {
  error: null,
  pending: false,
  loggedIn: false,
  username: null,
};

export const loginReducer = createReducer(
  initialState,
  on(logInAction, (state, action) => ({
    error: null,
    loggedIn: false,
    pending: true,
    username: action.username,
  })),
  on(logOutAction, (state) => ({
    error: null,
    loggedIn: true,
    pending: true,
    username: state.username,
  })),
  on(logInSuccesAction, (state) => ({
    error: null,
    loggedIn: true,
    pending: false,
    username: state.username,
  })),
  on(logOutSuccesAction, (state) => ({
    error: null,
    loggedIn: false,
    pending: false,
    username: null,
  })),

  on(logOutErrorAction, (state, action) => ({
    ...state,
    error: action.error,
    pending: false,
  })),
  on(logInErrorAction, (state, action) => ({
    ...state,
    error: action.error,
    pending: false,
  }))
);
