import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { BiArrowBack } from "react-icons/bi";

export default function ViewStudent() {
  const { _id } = useParams();
  const navigate = useNavigate();
  const studentArr = useSelector((state) => state.student.studentsArr);
  const teacherArr = useSelector((state) => state.teacher.teachersArr);
  const mergedArr = [...studentArr, ...teacherArr];
  const filteredArr = mergedArr.filter((student) => student._id === _id);
  const lengthOfObj = Object.keys(filteredArr[0]).length;

  return (
    <div>
      <div className="header">
        <BiArrowBack onClick={() => navigate("/")} />
        <h4>{lengthOfObj > 8 ? "Student" : "Teacher"} details</h4>
      </div>
      <table className="dataTable">
        <tbody>
          {lengthOfObj > 8 ? (
            <tr>
              <td>Name</td>
              <td>Age</td>
              <td>Class</td>
              <td>Grade</td>
              <td>Gender</td>
              <td>Attendence</td>
              <td>Maths</td>
              <td>Science</td>
              <td>English</td>
              <td>Total</td>
              <td>Actions</td>
            </tr>
          ) : (
            <tr>
              <td>Name</td>
              <td>Subject</td>
              <td>Contact</td>
            </tr>
          )}
          {lengthOfObj > 8
            ? filteredArr.map((student) => {
                const {
                  _id,
                  name,
                  age,
                  class: studentClass,
                  grade,
                  gender,
                  attendence,
                  maths,
                  science,
                  english,
                  total
                } = student;

                return (
                  <tr key={_id}>
                    <td>{name}</td>
                    <td>{age}</td>
                    <td>{studentClass}</td>
                    <td>{grade}</td>
                    <td>{gender}</td>
                    <td>{attendence}</td>
                    <td>{maths}</td>
                    <td>{science}</td>
                    <td>{english}</td>
                    <td>{total}</td>
                  </tr>
                );
              })
            : filteredArr.map((teacher) => {
                return (
                  <tr key={teacher._id}>
                    <td>{teacher.name}</td>
                    <td>{teacher.subject}</td>
                    <td>{teacher.contact}</td>
                  </tr>
                );
              })}
        </tbody>
      </table>
    </div>
  );
}
