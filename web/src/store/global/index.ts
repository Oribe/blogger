import { Action } from '@/interface'
import initState, { State } from './state'

export default (state = initState, action: Action): State => {
  const newState = state
  switch (action.type) {
    case '':
      break
    default:
      break
  }

  return newState
}
