import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchStudentsData,
  editStudentData,
  deleteHandler
} from "../../slices/student/actions";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { NavLink } from "react-router-dom";

export default function FetchStudents() {
  const dispatch = useDispatch();
  const studentData = useSelector((state) => state.student.studentsArr);
  useEffect(() => {
    dispatch(fetchStudentsData());
  }, [dispatch]);
  return (
    <div>
      <h4>Students</h4>
      <table>
        <tbody>
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
          {studentData.map((item) => {
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
            } = item;

            return (
              <tr key={_id}>
                <td>
                  <NavLink to={`/pages/viewDetails/${_id}`}>{name}</NavLink>
                </td>
                <td>{age}</td>
                <td>{studentClass}</td>
                <td>{grade}</td>
                <td>{gender}</td>
                <td>{attendence}</td>
                <td>{maths}</td>
                <td>{science}</td>
                <td>{english}</td>
                <td>{total}</td>
                <td>
                  <FiEdit
                    size="1.7em"
                    onClick={() => dispatch(editStudentData(item))}
                  />
                  <AiOutlineDelete
                    size="1.7em"
                    onClick={() => dispatch(deleteHandler(_id))}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
