import { createSlice } from '@reduxjs/toolkit'

interface MapState {
  value: string
}

const initialState: MapState = {
  value: '0',
}

export const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    setSelectMap: (state, action) => {
        state.value = action.payload;
      },
  },
})

export const { setSelectMap } = mapSlice.actions

export default mapSlice.reducer
