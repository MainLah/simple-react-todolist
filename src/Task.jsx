const Task = () => {
  const data = [
    { title: "Task 1", description: "Do homework" },
    { title: "Task 2", description: "Do chores" },
  ];

  return (
    <div className="task-list">
      {data &&
        data.map((task) => (
          <div className="task-box">
            <h3 className="task-preview-title">{task.title}</h3>
          </div>
        ))}
    </div>
  );
};

export default Task;
