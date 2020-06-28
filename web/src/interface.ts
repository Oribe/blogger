import { Action as ReduxAction } from 'redux'

export const EMPTY_OBJ = {}

export interface Action<T = any> extends ReduxAction {
  payload: T
}

export interface Obj<T = any> {
  [k: string]: T
}
