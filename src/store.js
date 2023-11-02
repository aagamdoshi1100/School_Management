import { configureStore } from "@reduxjs/toolkit";
import studentSlice from "./slices/student/studentSlice";
import { teacherSlice } from "./slices/teacher/teacherSlice";
import { statisticsSlice } from "./slices/statistics/statisticsSlice";

export default configureStore({
  reducer: {
    student: studentSlice.reducer,
    teacher: teacherSlice.reducer,
    statistics: statisticsSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});
