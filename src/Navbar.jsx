import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <h2>ToDo App</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link className="new-task-btn" to="/newtask">
            New Task
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
