import Task from "./Task";
import useFetch from "./useFetch";

const Home = () => {
  const { data, isPending, error } = useFetch("http://localhost:8000/task");

  return (
    <div className="home">
      <h1>ToDo App</h1>
      {isPending && <div className="loading">Loading</div>}
      {error && <div>{error}</div>}
      {data && data.length <= 0 ? (
        <h3>Create a new task!</h3>
      ) : (
        <Task tasks={data} />
      )}
    </div>
  );
};

export default Home;
