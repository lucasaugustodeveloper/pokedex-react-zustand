import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import thunk from 'redux-thunk'
import multi from 'redux-multi'
import promise from 'redux-promise'

import { rootReducers } from './reducers'
import { pokemonApi } from './services/pokemon'

export const store = configureStore({
  reducer: rootReducers,
  devTools: import.meta.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(thunk, multi, promise, pokemonApi.middleware)
})

setupListeners(store.dispatch)
