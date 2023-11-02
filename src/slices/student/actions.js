import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../constants";

export const addStudent = createAsyncThunk(
  "school/addStudent",
  async (inputVal) => {
    console.log(inputVal, "in8");
    const {
      name,
      age,
      class: studentClass,
      grade,
      attendence,
      maths,
      science,
      english,
      total,
      gender
    } = inputVal;
    const response = await axios(`${API_URL}/student/`, {
      method: "post",
      Headers: {
        "Content-Type": "application/json"
      },
      data: {
        name,
        age,
        class: studentClass,
        grade,
        attendence,
        maths,
        science,
        english,
        total,
        gender
      }
    });
    console.log(response, "res16");
    return response;
  }
);

export const editDataHandler = createAsyncThunk(
  "student/editDataHandler",
  async (data) => {
    console.log(data, "data45");
    const {
      name,
      age,
      class: studentClass,
      grade,
      attendence,
      maths,
      science,
      english,
      total,
      gender
    } = data.values;
    const response = await axios(
      `${API_URL}/student/edit/${data.getEditStudentID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        data: {
          name,
          age,
          class: studentClass,
          grade,
          attendence,
          maths,
          science,
          english,
          total,
          gender
        }
      }
    );
    return response;
  }
);

export const deleteHandler = createAsyncThunk(
  "student/deleteHandler",
  async (_id) => {
    console.log(_id, "88slice");
    const response = await axios.delete(`${API_URL}/student/delete/${_id}`);
    return response;
  }
);

export const fetchStudentsData = createAsyncThunk(
  "school/fetchStudentsData",
  async () => {
    const response = await axios.get(`${API_URL}/student/`);
    return response;
  }
);
