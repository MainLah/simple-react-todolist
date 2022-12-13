import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const TaskDetail = () => {
  const { id } = useParams();
  const { data, isPending, error } = useFetch(
    `http://localhost:8000/task/${id}`
  );

  return (
    <div className="task-detail">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {data && (
        <article>
          <h2>{data.title}</h2>
          <p>{data.description}</p>
        </article>
      )}
    </div>
  );
};

export default TaskDetail;
