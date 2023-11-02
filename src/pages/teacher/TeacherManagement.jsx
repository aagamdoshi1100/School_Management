import { useNavigate } from "react-router";
import AddTeacherForm from "./AddTeacherForm";
import FetchTeachers from "./FetchTeachers";
import { BiArrowBack } from "react-icons/bi";

export default function TeacherManagement() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="header">
        <BiArrowBack
          size="1.7em"
          className="arrow"
          onClick={() => navigate("/")}
        />
        <h3>Teacher Management</h3>
      </div>
      <AddTeacherForm />
      <FetchTeachers />
    </div>
  );
}
