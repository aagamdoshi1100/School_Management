import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudentsData } from "../../slices/student/actions";
import {
  applyFilters,
  sortImplementer
} from "../../slices/statistics/statisticsSlice";
import { BiSort, BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router";

export default function Statistics() {
  const classStudents = useSelector((state) => state.student.studentsArr);
  const filters = useSelector((state) => state.statistics.filters);

  const filteredByClass = classStudents.filter((students) =>
    filters.cls === "" ? students : students.class >= filters.cls
  );

  const filteredByGender = filteredByClass.filter((students) =>
    filters.gender === "" ? students : students.gender === filters.gender
  );

  const total = classStudents.reduce(
    (acc, cur) => {
      acc.attendence += cur.attendence;
      acc.maths += cur.maths;
      acc.science += cur.science;
      acc.english += cur.english;
      if ((cur.total / 750) * 100 > 80) {
        acc.topStudents = [...acc.topStudents, cur];
      }
      if (cur.attendence < 50) {
        acc.defaulters = [...acc.defaulters, cur];
      }
      return acc;
    },
    {
      attendence: 0,
      maths: 0,
      science: 0,
      english: 0,
      topStudents: [],
      defaulters: []
    }
  );
  console.log(total, "t");
  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchStudentsData());
  }, [dispatch]);
  return (
    <div>
      <div className="header">
        <BiArrowBack
          size="1.7em"
          className="arrow"
          onClick={() => navigate("/")}
        />
        <h3>Statistics</h3>
      </div>
      <h4>Class-wide Statistics</h4>
      <div className="filters">
        <div>
          <p>Filter by class:</p>
          <select
            onChange={(e) =>
              dispatch(applyFilters({ type: "cls", val: e.target.value }))
            }
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
          <p>Filter by Gender:</p>
          <select
            onChange={(e) =>
              dispatch(applyFilters({ type: "gender", val: e.target.value }))
            }
          >
            <option value=""> Select</option>
            <option value="male"> Male</option>
            <option value="female"> Female</option>
            <option value="other"> Other</option>
          </select>
        </div>
      </div>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>
              Age
              <BiSort
                onClick={() => {
                  dispatch(sortImplementer({ type: "age" }));
                }}
              />
            </td>
            <td>
              Class
              <BiSort
                onClick={() => {
                  dispatch(sortImplementer({ type: "class" }));
                }}
              />
            </td>
            <td>Grade</td>
            <td>Gender</td>
            <td>
              Attendence
              <BiSort
                onClick={() => {
                  dispatch(sortImplementer({ type: "attendence" }));
                }}
              />{" "}
            </td>
            <td>
              Maths
              <BiSort
                onClick={() => {
                  dispatch(sortImplementer({ type: "maths" }));
                }}
              />{" "}
            </td>
            <td>
              Science
              <BiSort
                onClick={() => {
                  dispatch(sortImplementer({ type: "science" }));
                }}
              />{" "}
            </td>
            <td>
              English
              <BiSort
                onClick={() => {
                  dispatch(sortImplementer({ type: "english" }));
                }}
              />{" "}
            </td>
            <td>
              Total
              <BiSort
                onClick={() => {
                  dispatch(sortImplementer({ type: "total" }));
                }}
              />{" "}
            </td>
          </tr>
          {filteredByGender
            .sort((a, b) =>
              filters.isAsscending
                ? a[filters.sortType] - b[filters.sortType]
                : b[filters.sortType] - a[filters.sortType]
            )
            .map((students) => {
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
              } = students;
              return (
                <tr>
                  <td>{name}</td>
                  <td>{age}</td>
                  <td>{studentClass}</td>
                  <td>{grade}</td>
                  <td>
                    {gender === "male" ? "M" : gender === "female" ? "F" : "O"}
                  </td>
                  <td>{attendence}</td>
                  <td>{maths}</td>
                  <td>{science}</td>
                  <td>{english}</td>
                  <td>{total}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <h4>School-wide Statistics</h4>
      <table>
        <tbody>
          <tr>
            <td>Total students: </td>
            <td>{classStudents.length}</td>
          </tr>
          <tr>
            <td>Average attendence: </td>
            <td>{total.attendence / classStudents.length}</td>
          </tr>
          <tr>
            <td>Average Maths marks: </td>
            <td>{(total.maths / classStudents.length).toFixed()}</td>
          </tr>
          <tr>
            <td>Average English marks: </td>
            <td> {(total.english / classStudents.length).toFixed()}</td>
          </tr>{" "}
          <tr>
            <td>Average Science marks: </td>

            <td> {(total.science / classStudents.length).toFixed()}</td>
          </tr>
        </tbody>
      </table>

      <h4>Top performers [Students with greater then 80%]</h4>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Total</td>
            <td>Percentage</td>
          </tr>
          {total.topStudents.map((student) => {
            return (
              <tr>
                <td>{student.name}</td>
                <td>{student.total}</td>
                <td>{((student.total / 750) * 100).toFixed(2)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <h4>Top defaulters [Students with less then 50% attendece]</h4>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Attendence(%)</td>
          </tr>
          {total.defaulters.map((student) => {
            return (
              <tr>
                <td>{student.name}</td>
                <td>{student.attendence}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
