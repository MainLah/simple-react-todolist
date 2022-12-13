import { Link } from "react-router-dom";

const Task = ({ tasks }) => {
  return (
    <div className="task-list">
      {tasks &&
        tasks.map((task) => (
          <Link className="task-box" to={`/task/${task.id}`}>
            <h3 className="task-preview-title">{task.title}</h3>
          </Link>
        ))}
    </div>
  );
};

export default Task;
