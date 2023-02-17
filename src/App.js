import { useState } from "react";
import "./App.css";

function CreactTask({ tasks, setTasks }) {
  const [userInput, setUserInput] = useState("");

  function handleFormSbmit(e) {
    e.preventDefault();

    let newTask = { taskName: userInput, checked: false };

    setTasks((prevTasks) => [...prevTasks, newTask]);

    setUserInput("");
  }

  return (
    <form onSubmit={(e) => handleFormSbmit(e)}>
      <input
        type="text"
        placeholder="Add task"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <input type="submit" />
    </form>
  );
}

function TasksList({ tasks }) {
  function handleRemoveTask() {}
  let newTasks = tasks.map((task, i) => {
    return (
      <li className="list-item" key={i}>
        <input type="radio" checked={task.checked} />
        <span>{task.taskName}</span>{" "}
        <i class="fa-regular fa-trash-can" onClick={handleRemoveTask()}></i>
      </li>
    );
  });

  return <ul className="to-do-list">{newTasks}</ul>;
}

export default function App() {
  const [tasks, setTasks] = useState([]);
  return (
    <>
      <h2 className="app-title">TO-DO LIST</h2>
      <CreactTask tasks={tasks} setTasks={setTasks} />
      <TasksList tasks={tasks} />
    </>
  );
}
