import { useState } from "react";
import { useHistory } from "react-router-dom";

const NewTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = { title, description };
    setIsPending(true);

    fetch("http://localhost:8000/task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    }).then(() => {
      setIsPending(false);
      history.push("/");
    });
  };

  return (
    <div className="create-task">
      {isPending ? (
        <div>Loading...</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>What's the task?</label>
          <input
            type="text"
            placeholder="Your task..."
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Explain the task so you won't forget!</label>
          <input
            type="text"
            placeholder="Describe it"
            required
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <button>Add Task</button>
        </form>
      )}
    </div>
  );
};

export default NewTask;
