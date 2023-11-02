import { createSlice } from "@reduxjs/toolkit";

export const statisticsSlice = createSlice({
  name: "statistics",
  initialState: {
    filters: {
      cls: 0,
      gender: "",
      sortType: "",
      isAsscending: false
    }
  },
  reducers: {
    applyFilters: (state, action) => {
      console.log(action, "act13");

      state.filters = {
        ...state.filters,
        [action.payload.type]: action.payload.val
      };
    },
    sortImplementer: (state, action) => {
      state.filters = {
        ...state.filters,
        sortType: [action.payload.type],
        isAsscending: !state.filters.isAsscending
      };

      // state.studentsArr = state.studentsArr.sort(
      //   (a, b) => a[action.payload.type] - b[action.payload.type]
      // );
    }
  },
  extraReducers: {}
});

export const { applyFilters, sortImplementer } = statisticsSlice.actions;
