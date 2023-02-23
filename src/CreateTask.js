import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

export default function CreactTask({ tasks, setTasks }) {
  const [userInput, setUserInput] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();
    let newTask = { taskName: userInput, checked: false, id: uuidv4() }; //  + 1

    const newTasks = [newTask, ...tasks];
    localStorage.setItem("tasks", JSON.stringify(newTasks));

    setUserInput("");
    setTasks(newTasks);
  }

  return (
    <form onSubmit={handleFormSubmit}>
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
