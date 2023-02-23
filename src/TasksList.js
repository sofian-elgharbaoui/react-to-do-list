import Task from "./Task";

export default function TasksList({ tasks, setTasks }) {
  function handleRemoveTask(taskID) {
    const newTasks = [...tasks].filter((task) => task.id !== taskID);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setTasks(newTasks);
  }

  function handleRadioChange(taskID) {
    const newTasks = [...tasks].map((task) => {
      console.log(task.id, taskID);
      if (task.id === taskID) {
        alert(task.taskName);
        return {
          ...task,
          checked: !task.checked,
        };
      } else return task;
    });

    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setTasks(newTasks);
  }

  const newTasks = [...tasks].map((task) => {
    return (
      <Task
        task={task}
        setTasks={setTasks}
        onRadioChange={() => handleRadioChange(task.id)}
        onRemoveTask={() => handleRemoveTask(task.id)}
      />
    );
  });

  return <ul className="to-do-list">{newTasks}</ul>;
}
