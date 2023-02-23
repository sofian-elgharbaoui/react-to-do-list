import { useState } from "react";
import CreactTask from "./CreateTask";
import TasksList from "./TasksList";

export default function App() {
  const tasksArr = JSON.parse(localStorage.getItem("tasks")) || [];
  const [tasks, setTasks] = useState(tasksArr);

  return (
    <>
      <h2 className="app-title">TO-DO LIST</h2>
      <CreactTask tasks={tasks} setTasks={setTasks} />
      <TasksList tasks={tasks} setTasks={setTasks} />
    </>
  );
}
