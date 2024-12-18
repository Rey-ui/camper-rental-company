import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  form: "",
  details: {
    airConditioner: false,
    automatic: false,
    kitchen: false,
    TV: false,
    shower: false,
  },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setLocation(state, action) {
      state.location = action.payload;
    },
    setForm(state, action) {
      state.form = action.payload;
    },
    setDetails(state, action) {
      state.details = action.payload;
    },
    clearFilters(state) {
      state.location = "";
      state.form = "";
      state.details = {
        airConditioner: false,
        automatic: false,
        kitchen: false,
        TV: false,
        shower: false,
      };
    },
  },
});

export const { setLocation, setForm, setDetails, clearFilters } =
  filterSlice.actions;
export const filterReducer = filterSlice.reducer;
