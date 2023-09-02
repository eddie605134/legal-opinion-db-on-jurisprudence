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

  unique: boolean;
}

interface ResultState {
  advanceSearchOpen: boolean;
  filterValues: FilterValues;
  resultList: OpinionType[];
  queryText: string;
  tabObservable: boolean;
  queryBy: 'K' | 'O' | '';
}

const initialState: ResultState = {
  advanceSearchOpen: false,
  filterValues: {
    courtHouse: '最高法院',
    courtArea: '臺灣高等法院',
    // startYear: dayjs().year().toString(),
    // startMonth: dayjs().month().toString(),
    // endYear: dayjs().year().toString(),
    // endMonth: dayjs().month().toString(),
    startYear: '2016',
    startMonth: '08',
    endYear: '2018',
    endMonth: '12',
    unique: false,
  },
  resultList: [],
  queryText: '',
  tabObservable: true,
  // 
  queryBy: '',
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
    },
    setTabObservable: (state, action) => {
      state.tabObservable = action.payload;
    },
    setQueryBy: (state, action) => {
      if (action.payload === '1') {
        state.queryBy = 'K';
      } else if (action.payload === '2') {
        state.queryBy = 'O';
      }
    }
  },
})

export const {
  setFilterValue,
  setAdvanceSearchOpen,
  setResultList,
  setQueryText,
  setTabObservable,
  setQueryBy,
} = resultSlice.actions

export default resultSlice.reducer
