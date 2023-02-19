import { useState } from "react";
import "./App.css";

function Task({ task, i, handleRemoveTask, handleRadioChange }) {
  return (
    <li className="list-item" key={i}>
      <input
        type="checkbox"
        checked={task.checked}
        onChange={handleRadioChange}
      />
      <span>{task.taskName}</span>{" "}
      <i className="fa-regular fa-trash-can" onClick={handleRemoveTask}></i>
    </li>
  );
}

function CreactTask({ tasks, setTasks }) {
  const [userInput, setUserInput] = useState("");

  function handleFormSbmit(e) {
    e.preventDefault();
    let newTask = { taskName: userInput, checked: false };

    const newTasks = [newTask, ...tasks];
    localStorage.setItem("tasks", JSON.stringify(newTasks));

    setTasks(newTasks);
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
      <input type="submit" value="Add task" />
    </form>
  );
}

function TasksList({ tasks, setTasks }) {
  function handleRemoveTask(i) {
    const newTasks = [...tasks];
    newTasks.splice(i, 1);

    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setTasks(newTasks);
  }

  function handleRadioChange(index) {
    const newTasks = [...tasks];
    newTasks[index] = {
      ...newTasks[index],
      checked: !newTasks[index].checked,
    };
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setTasks(tasks);
  }

  const newTasks = [...tasks].map((task, i) => {
    return (
      <Task
        task={task}
        i={i}
        setTasks={setTasks}
        handleRadioChange={() => handleRadioChange(i)}
        handleRemoveTask={() => handleRemoveTask(i)}
      />
    );
  });

  return <ul className="to-do-list">{newTasks}</ul>;
}

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
