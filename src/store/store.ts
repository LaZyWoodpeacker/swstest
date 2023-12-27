import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { mainApi } from '../services/main-api'
import nodesSlice from './slices/nodes.slice'

const rootReducer = combineReducers({
  nodes: nodesSlice,
  [mainApi.reducerPath]: mainApi.reducer
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(mainApi.middleware)
})

export type RootStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
