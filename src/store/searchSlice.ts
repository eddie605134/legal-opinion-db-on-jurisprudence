import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SearchState {
  searchText: string
}

const initialState: SearchState = {
  searchText: '',
}

export const searchSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    inputSearch: (state, action:PayloadAction<string>) => {
      state.searchText = action.payload
    },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
})

export const { inputSearch } = searchSlice.actions

export default searchSlice.reducer
