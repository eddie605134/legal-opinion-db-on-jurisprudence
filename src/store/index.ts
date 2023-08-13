import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import mapReducer from './mapSlice'
import searchSlice from './searchSlice'
import resultSlice from './resultSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    maper: mapReducer,
    search: searchSlice,
    result: resultSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
