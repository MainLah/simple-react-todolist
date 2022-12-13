import Home from "./Home";
import Navbar from "./Navbar";
import Task from "./Task";
import TaskDetail from "./TaskDetail";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NewTask from "./NewTask";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
              <Task />
            </Route>
            <Route path="/newtask">
              <NewTask />
            </Route>
            <Route path="/task/:id">
              <TaskDetail />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
