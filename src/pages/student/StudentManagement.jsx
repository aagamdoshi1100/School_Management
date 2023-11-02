import { useNavigate } from "react-router";
import AddStudentForm from "./AddStudentForm";
import FetchStudents from "./FetchStudents";
import { BiArrowBack } from "react-icons/bi";

export default function StudentManagement() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="header">
        <BiArrowBack
          size="1.7em"
          className="arrow"
          onClick={() => navigate("/")}
        />
        <h3>Student Management</h3>
      </div>
      <AddStudentForm />
      <FetchStudents />
    </div>
  );
}
