const Task = ({ tasks }) => {
  return (
    <div className="task-list">
      {tasks &&
        tasks.map((task) => (
          <div className="task-box">
            <h3 className="task-preview-title">{task.title}</h3>
          </div>
        ))}
    </div>
  );
};

export default Task;
