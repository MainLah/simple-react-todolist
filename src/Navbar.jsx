const Navbar = () => {
  return (
    <div className="navbar">
      <h2>ToDo App</h2>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a className="new-task-btn" href="#">
            New Task
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
