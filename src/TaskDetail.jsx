import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const TaskDetail = () => {
  const { id } = useParams();
  const { data, isPending, error } = useFetch(
    `http://localhost:8000/task/${id}`
  );
  const history = useHistory();

  const handleClick = () => {
    fetch(`http://localhost:8000/task/${id}`, { method: "DELETE" }).then(() =>
      history.push("/")
    );
  };

  return (
    <div className="task-detail">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {data && (
        <div className="content-wrapper">
          <div className="card">
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <button onClick={handleClick}>I've done this task</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskDetail;
