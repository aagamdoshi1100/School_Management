import Home from "./pages/Home";
import { Routes, Route } from "react-router";
import "./styles.css";
import NotFound from "./pages/NotFound";
import StudentManagement from "./pages/student/StudentManagement";
import TeacherManagement from "./pages/teacher/TeacherManagement";
import ViewDetails from "./pages/ViewDetails";
import Statistics from "./pages/statistics/Statistics";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/student" element={<StudentManagement />} />
        <Route path="/pages/teacher" element={<TeacherManagement />} />
        <Route path="/pages/viewDetails/:_id" element={<ViewDetails />} />
        <Route path="/pages/statistics" element={<Statistics />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
