import { useState } from "react";
import "./App.css";

function CreactTask() {
  return (
    <form>
      <input type="text" placeholder="Add task" />
      <input type="submit" />
    </form>
  );
}
// {listItems}
function TasksList() {
  return (
    <ul className="to-do-list">
      <li className="list-item">
        <input type="checkbox" checked={false} /> <span>hello</span>{" "}
        <i class="fa-regular fa-trash-can"></i>
      </li>
    </ul>
  );
}

// function ToDoList() {
//   return <></>;
// }
export default function App() {
  return (
    <div>
      <h2 className="app-title">TO-DO LIST</h2>
      <CreactTask />
      <TasksList />
    </div>
  );
}
