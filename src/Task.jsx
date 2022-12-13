import { Link } from "react-router-dom";

const Task = ({ tasks }) => {
  return (
    <div className="task-list">
      {tasks &&
        tasks.map((task) => (
          <Link to={`/task/${task.id}`}>
            <div className="task-box">
              <h3 className="task-preview-title">{task.title}</h3>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default Task;
