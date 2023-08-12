import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import mapReducer from './mapSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    maper: mapReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
