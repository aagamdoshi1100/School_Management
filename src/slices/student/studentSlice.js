import { createSlice } from "@reduxjs/toolkit";
import {
  addStudent,
  deleteHandler,
  editDataHandler,
  fetchStudentsData
} from "./actions";

const studentSlice = createSlice({
  name: "student",
  initialState: {
    values: {
      name: "",
      age: 0,
      class: 0,
      grade: "",
      gender: "",
      attendence: 0,
      maths: 0,
      science: 0,
      english: 0,
      total: 0
    },
    studentsArr: [],
    loading: {
      add: "",
      fetch: "",
      update: "",
      delete: ""
    },
    error: {
      add: "",
      fetch: "",
      update: "",
      delete: ""
    },
    editStudent: false,
    editId: ""
  },
  reducers: {
    changeHandler: (state, { payload }) => {
      const { field, value } = payload;
      const update = {
        ...state.values,
        [field]: value
      };
      state.values = update;
    },
    editStudentData: (state, action) => {
      state.values = action.payload;
      state.editId = action.payload._id;
      state.editStudent = true;
    }
  },
  extraReducers: {
    [fetchStudentsData.pending]: (state) => {
      state.loading.fetch = "loading";
    },
    [fetchStudentsData.fulfilled]: (state, action) => {
      state.studentsArr = action.payload.data.data;
    },
    [fetchStudentsData.rejected]: (state) => {
      state.error.fetch = "error";
    },
    [addStudent.pending]: (state) => {
      state.loading.add = "loading";
    },
    [addStudent.fulfilled]: (state, action) => {
      console.log(action, "act");
      state.values = {
        name: "",
        age: 0,
        class: 0,
        grade: "",
        gender: "",
        attendence: 0,
        maths: 0,
        science: 0,
        english: 0,
        total: 0
      };
      state.studentsArr = [...state.studentsArr, action.payload.data.data];
    },
    [addStudent.rejected]: (state, obj) => {
      state.error.add = "error";
    },
    [editDataHandler.pending]: (state) => {
      state.loading.update = "loading";
    },
    [editDataHandler.fulfilled]: (state, { payload }) => {
      state.studentsArr = state.studentsArr.map((stud) => {
        if (stud._id === payload.data.data._id) {
          stud = Object.assign(stud, payload.data.data);
          return stud;
        }
        return stud;
      });
      state.editId = "";
      state.editStudent = false;
      state.values = {
        name: "",
        age: 0,
        class: 0,
        grade: "",
        gender: "",
        attendence: 0,
        maths: 0,
        science: 0,
        english: 0,
        total: 0
      };
    },
    [editDataHandler.rejected]: (state, obj) => {
      console.log(obj, "obj");
    },
    [deleteHandler.pending]: (state) => {
      state.loading.delete = "loading";
    },
    [deleteHandler.fulfilled]: (state, action) => {
      state.studentsArr = state.studentsArr.filter(
        (stud) => stud._id !== action.payload.data.data._id
      );
    },
    [deleteHandler.rejected]: (state, obj) => {
      state.error.delete = "error";
    }
  }
});

export const {
  changeHandler,
  addStudentHandler,
  editStudentData
} = studentSlice.actions;
export default studentSlice;
