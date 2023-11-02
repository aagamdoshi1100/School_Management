import { NavLink } from "react-router-dom";
export default function Home() {
  return (
    <div>
      <h3>School Management App</h3>
      <div className="links">
        <NavLink to="/pages/student">Student Management</NavLink>
        <NavLink to="/pages/teacher">Teacher Management</NavLink>
        <NavLink to="/pages/statistics">Statistics</NavLink>
      </div>
    </div>
  );
}
