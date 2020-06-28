import initState from './state'
import { Action } from '@/interface'


export default (state = initState, action: Action) => {
  let newState = state
  switch (action.type) {
    default:
      newState = newState
  }

  return newState
}
