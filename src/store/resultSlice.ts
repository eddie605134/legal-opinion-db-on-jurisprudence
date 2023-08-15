import { createSlice } from '@reduxjs/toolkit'

import { 
  OpinionType
} from '@/types/map'

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
  filterValues: FilterValues;
  resultList: OpinionType[];
  queryText: string;
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
  resultList: [],
  queryText: ''
}

export const resultSlice = createSlice({
  name: 'result',
  initialState,
  reducers: {
    setAdvanceSearchOpen: (state, action) => {
      state.advanceSearchOpen = action.payload;
    },
    setFilterValue: (state, action) => {
      state.filterValues = { ...state.filterValues, ...action.payload };
    },
    setResultList: (state, action) => {
      state.resultList = action.payload;
    },
    setQueryText: (state, action) => {
      state.queryText = action.payload;
    }
  },
})

export const {
  setFilterValue,
  setAdvanceSearchOpen,
  setResultList,
  setQueryText
} = resultSlice.actions

export default resultSlice.reducer
