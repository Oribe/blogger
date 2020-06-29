import { Record } from 'immutable'
import routers from '@/routers'

export class State extends Record({
  routers,
}) {}

const state = new State()

export default state
