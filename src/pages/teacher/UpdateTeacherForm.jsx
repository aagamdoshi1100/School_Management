import { useDispatch, useSelector } from "react-redux";
import { updteTeacherData } from "../../slices/teacher/actions";
import { handleInputs } from "../../slices/teacher/teacherSlice";

export default function UpdateTeacherForm() {
  const dispatch = useDispatch();
  const edit = useSelector((state) => state.teacher.edit);
  const inputs = useSelector((state) => state.teacher.inputs);

  return (
    <div>
      {edit.editState && (
        <div className="editBox">
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={inputs.name}
              onChange={(e) =>
                dispatch(handleInputs({ key: "name", val: e.target.value }))
              }
            />
          </div>
          <div>
            <label>Subject:</label>
            <input
              type="text"
              value={inputs.subject}
              onChange={(e) =>
                dispatch(handleInputs({ key: "subject", val: e.target.value }))
              }
            />
          </div>
          <div>
            <label>Contact information:</label>
            <input
              type="number"
              value={inputs.contact}
              onChange={(e) =>
                dispatch(handleInputs({ key: "contact", val: e.target.value }))
              }
            />
          </div>

          <button
            onClick={() =>
              dispatch(
                updteTeacherData({ id: edit.editId, updatedData: inputs })
              )
            }
          >
            Update teacher
          </button>
        </div>
      )}
    </div>
  );
}
