import { combineReducers } from '@reduxjs/toolkit'

import counterReducer from './counter'
import { pokemonApi } from '../services/pokemon'

export const rootReducers = combineReducers({
  counter: counterReducer,
  [pokemonApi.reducerPath]: pokemonApi.reducer
})
