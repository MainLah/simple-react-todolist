import { Link } from "react-router-dom";

const Task = ({ tasks }) => {
  return (
    <div className="task-list">
      {tasks &&
        tasks.map((task) => (
          <Link className="task-box" to={`/task/${task.id}`}>
            <p className="task-preview-title">{task.title}</p>
          </Link>
        ))}
    </div>
  );
};

export default Task;
