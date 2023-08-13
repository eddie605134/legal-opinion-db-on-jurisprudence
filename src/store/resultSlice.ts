import { createSlice } from '@reduxjs/toolkit'

import dayjs from 'dayjs'

interface FilterValues {
  courtHouse: string;
  courtArea: string;

  startYear: string;
  startMonth: string;

  endYear: string;
  endMonth: string;
}

interface ResultState {
  advanceSearchOpen: boolean;
  filterValues: FilterValues
}

const initialState: ResultState = {
  advanceSearchOpen: false,
  filterValues: {
    courtHouse: '',
    courtArea: '',
    startYear: dayjs().year().toString(),
    startMonth: dayjs().month().toString(),
    endYear: dayjs().year().toString(),
    endMonth: dayjs().month().toString(),
  },
}

export const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    setAdvanceSearchOpen: (state, action) => {
      state.advanceSearchOpen = action.payload;
    },
    setFilterValue: (state, action) => {
      state.filterValues = { ...state.filterValues, ...action.payload };
    },
  },
})

export const { setFilterValue, setAdvanceSearchOpen } = mapSlice.actions

export default mapSlice.reducer
