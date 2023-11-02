import {
  addTeacher,
  deleteTeacherData,
  fetchTeachers,
  updteTeacherData
} from "./actions";

const { createSlice } = require("@reduxjs/toolkit");

const teacherSlice = createSlice({
  name: "teacher",
  initialState: {
    teachersArr: [],
    inputs: {
      name: "",
      subject: "",
      contact: null
    },
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
    edit: {
      editState: false,
      editId: ""
    }
  },
  reducers: {
    handleInputs: (state, action) => {
      state.inputs = {
        ...state.inputs,
        [action.payload.key]: action.payload.val
      };
    },
    editTeacherData: (state, action) => {
      state.inputs = action.payload;
      state.edit.editState = true;
      state.edit.editId = action.payload._id;
    }
  },
  extraReducers: {
    [addTeacher.pending]: (state) => {
      state.loading.add = "loading";
    },
    [addTeacher.fulfilled]: (state, action) => {
      state.teachersArr = [...state.teachersArr, action.payload.data.data];
      state.inputs = {
        name: "",
        subject: "",
        contact: null
      };
    },
    [addTeacher.rejected]: (state, obj) => {
      state.error.add = "error";
    },
    [fetchTeachers.pending]: (state) => {
      state.loading.fetch = "loading";
    },
    [fetchTeachers.fulfilled]: (state, { payload }) => {
      state.teachersArr = payload.data.data;
    },
    [fetchTeachers.rejected]: (state, obj) => {
      state.error.fetch = "error";
    },
    [updteTeacherData.pending]: (state) => {
      state.loading.update = "loading";
    },
    [updteTeacherData.fulfilled]: (state, action) => {
      state.teachersArr = state.teachersArr.map((t) => {
        if (t._id === action.payload.data.data._id) {
          t = Object.assign(t, action.payload.data.data);
          return t;
        }
        return t;
      });
      state.edit.editState = false;
      state.edit.editId = "";
      state.inputs = {
        name: "",
        subject: "",
        contact: null
      };
    },
    [updteTeacherData.rejected]: (state, obj) => {
      state.error.update = "error";
    },
    [deleteTeacherData.pending]: (state) => {
      state.loading.delete = "loading";
    },
    [deleteTeacherData.fulfilled]: (state, action) => {
      state.teachersArr = state.teachersArr.filter(
        (t) => t._id !== action.payload.data.data._id
      );
    },
    [deleteTeacherData.rejected]: (state, obj) => {
      console.log(obj, "slice105");
    }
  }
});

export const { handleInputs, editTeacherData } = teacherSlice.actions;
export { teacherSlice };
