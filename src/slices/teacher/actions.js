import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../constants";

export const addTeacher = createAsyncThunk(
  "teacher/addTeacher",
  async (data) => {
    const response = await axios(`${API_URL}/teacher`, {
      method: "POST",
      data
    });
    return response;
  }
);

export const fetchTeachers = createAsyncThunk(
  "teacher/fetchTeacher",
  async () => {
    const response = await axios.get(`${API_URL}/teacher`);
    return response;
  }
);

export const updteTeacherData = createAsyncThunk(
  "teacher/updteTeacherData",
  async (updatedDataObj) => {
    const { name, subject, contact } = updatedDataObj.updatedData;
    const response = await axios(
      `${API_URL}/teacher/edit/${updatedDataObj.id}`,
      {
        method: "POST",
        data: { name, subject, contact }
      }
    );
    return response;
  }
);

export const deleteTeacherData = createAsyncThunk(
  "teacher/deleteTeacherData",
  async (teacherId) => {
    const response = await axios.delete(
      `${API_URL}/teacher/delete/${teacherId}`
    );
    return response;
  }
);
