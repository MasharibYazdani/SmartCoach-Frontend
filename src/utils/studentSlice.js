import { createSlice } from "@reduxjs/toolkit";

const studentsSlice = createSlice({
  name: "students",
  initialState: null,

  reducers: {
    addStudents: (state, action) => action.payload,
    removeStudents: () => null,
  },
});

export const { addStudents, removeStudents } = studentsSlice.actions;

export default studentsSlice.reducer;
