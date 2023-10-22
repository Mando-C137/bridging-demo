import { createAction, props } from '@ngrx/store';
import { Credentials } from '../../types';

export const logInAction = createAction('[LOGIN] login ', props<Credentials>());
export const logOutAction = createAction('[LOGIN] logout ');
export const logOutSuccesAction = createAction('[LOGIN] login success');
export const logInSuccesAction = createAction('[LOGIN] logout success');
export const logOutErrorAction = createAction(
  '[LOGIN] login error',
  props<{ error: string }>()
);
export const logInErrorAction = createAction(
  '[LOGIN] logout error',
  props<{ error: string }>()
);
