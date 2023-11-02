import { useDispatch, useSelector } from "react-redux";
import { addTeacher } from "../../slices/teacher/actions";
import { handleInputs } from "../../slices/teacher/teacherSlice";

export default function AddTeacherForm() {
  const dispatch = useDispatch();
  const inputs = useSelector((state) => state.teacher.inputs);

  return (
    <div className="form">
      <h4>Teacher Form</h4>
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
          value={inputs.contact === null ? "" : inputs.contact}
          onChange={(e) =>
            dispatch(handleInputs({ key: "contact", val: e.target.value }))
          }
        />
      </div>

      <button onClick={() => dispatch(addTeacher(inputs))}>Add teacher</button>
    </div>
  );
}
