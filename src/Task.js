export default function Task({ task, onRemoveTask, onRadioChange }) {
  return (
    <li className="list-item" key={task.id}>
      <input type="checkbox" checked={task.checked} onChange={onRadioChange} />
      <span>{task.taskName}</span>{" "}
      <i className="fa-regular fa-trash-can" onClick={onRemoveTask}></i>
    </li>
  );
}
