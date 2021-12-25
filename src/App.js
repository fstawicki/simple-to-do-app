import React, {useState} from "react";
import AddTask from "./components/AddTask";
import TasksList from "./components/TasksList";

function App() {

  const [tasks,setTasks] = useState([]);

  const addNewTask = (taskName,taskLocation,taskDate) => {
    setTasks((prevTasks) =>{
      setTasks([...prevTasks,{name: taskName, location: taskLocation, date: taskDate}]);
    })
  }

  return (
    <div className="App">
      <AddTask onAddTask={addNewTask} />
      <TasksList tasks={tasks} />
    </div>
  );
}

export default App;
