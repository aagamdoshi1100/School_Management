import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeachers } from "../../slices/teacher/actions";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { editTeacherData } from "../../slices/teacher/teacherSlice";
import { deleteTeacherData } from "../../slices/teacher/actions";
import UpdateTeacherForm from "./UpdateTeacherForm";
import { NavLink } from "react-router-dom";

export default function FetchTeachers() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTeachers());
  }, [dispatch]);
  const teachersArr = useSelector((state) => state.teacher.teachersArr);
  const edit = useSelector((state) => state.teacher.edit);

  return (
    <div>
      <h4>Teacher Details</h4>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Subject</td>
            <td>Contact Info</td>
            <td>Actions</td>
          </tr>
          {teachersArr.map((t) => {
            const { _id, name, subject, contact } = t;
            return (
              <tr key={_id}>
                <td>
                  <NavLink to={`/pages/viewDetails/${_id}`}>{name}</NavLink>
                </td>
                <td>{subject}</td>
                <td>{contact}</td>
                <td>
                  <FiEdit
                    size="1.7em"
                    onClick={() => dispatch(editTeacherData(t))}
                  />
                  <AiOutlineDelete
                    size="1.7em"
                    onClick={() => dispatch(deleteTeacherData(_id))}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {edit && <UpdateTeacherForm />}
    </div>
  );
}
