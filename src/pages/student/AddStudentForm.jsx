import { useDispatch, useSelector } from "react-redux";
import {
  changeHandler,
  addStudent,
  editDataHandler
} from "../../slices/student/studentSlice";

export default function AddStudentForm() {
  const dispatch = useDispatch();
  const values = useSelector((state) => state.student.values);
  const editFlag = useSelector((state) => state.student.editStudent);
  const getEditStudentID = useSelector((state) => state.student.editId);
  const handleChange = (field, value) => {
    dispatch(changeHandler({ field, value }));
  };
  const submitHandler = () => {
    dispatch(
      addStudent({
        ...values,
        english: Number(values.english),
        total: Number(values.total)
      })
    );
  };
  return (
    <div className="form">
      <h4>Student Form</h4>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={values.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />
      </div>
      <div>
        <label>Age:</label>
        <input
          type="number"
          value={values.age}
          onChange={(e) => handleChange("age", e.target.value)}
        />
      </div>
      <div>
        <label>Class:</label>
        <select
          name="class"
          style={{ width: "167px" }}
          value={values.class}
          onChange={(e) => handleChange("class", e.target.value)}
        >
          <option value=""> Select</option>
          <option value="1"> 1</option>
          <option value="2"> 2</option>
          <option value="3"> 3</option>
          <option value="4"> 4</option>
          <option value="5"> 5</option>
          <option value="6"> 6</option>
          <option value="7"> 7</option>
          <option value="8"> 8</option>
          <option value="9"> 9</option>
          <option value="10"> 10</option>
        </select>
      </div>
      <div>
        <label>Grade:</label>
        <select
          value={values.grade}
          style={{ width: "167px" }}
          onChange={(e) => handleChange("grade", e.target.value)}
        >
          <option value=""> Select</option>
          <option value="A">A</option>
          <option value="A+">A+</option>
          <option value="B">B</option>
          <option value="B+">B+</option>
          <option value="C">C</option>
          <option value="C+">C+</option>
          <option value="D">D</option>
        </select>
      </div>
      <div>
        <label>Gender:</label>
        <div>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={values.gender === "male"}
            onChange={(e) => handleChange("gender", e.target.value)}
          />
          <label>Male</label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={values.gender === "female"}
            onChange={(e) => handleChange("gender", e.target.value)}
          />
          <label>Female</label>
          <input
            type="radio"
            name="gender"
            value="other"
            checked={values.gender === "other"}
            onChange={(e) => handleChange("gender", e.target.value)}
          />
          <label>Other</label>
        </div>
      </div>
      <div>
        <label>Attendance(%):</label>
        <input
          type="number"
          value={values.attendence}
          onChange={(e) => handleChange("attendence", e.target.value)}
        />
      </div>
      <div>
        <label>Maths Marks:</label>
        <input
          type="number"
          value={values.maths}
          onChange={(e) => handleChange("maths", e.target.value)}
        />
      </div>{" "}
      <div>
        <label>Science Marks:</label>
        <input
          type="number"
          value={values.science}
          onChange={(e) => handleChange("science", e.target.value)}
        />
      </div>{" "}
      <div>
        <label>English Marks:</label>
        <input
          type="number"
          value={values.english}
          onChange={(e) => handleChange("english", e.target.value)}
        />
      </div>{" "}
      <div>
        <label>Total Marks:</label>
        <input
          type="number"
          value={values.total}
          onChange={(e) => handleChange("total", e.target.value)}
        />
      </div>
      {editFlag ? (
        <button
          onClick={() =>
            dispatch(editDataHandler({ getEditStudentID, values }))
          }
        >
          Update
        </button>
      ) : (
        <button onClick={submitHandler}>Add student</button>
      )}
    </div>
  );
}
