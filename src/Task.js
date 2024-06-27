import React, { useReducer, useState } from "react";
import Todos from "./Todos";
import tasksReducer from "./tasksReducer";

let nextId = 3;

const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lesson Wall pic", done: false },
];

export default function Task() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  function handleAddTask(text) {
   
    dispatch({
      type: "added",
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: "changed",
      task: task,
    });
  }

  function handleDeleteTask(id) {
    dispatch({
      type: "deleted",
      id: id,
    });
  }

  return (
    <div>
      <h1>My Tasks</h1>
      <Todos
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
        onAddTask={handleAddTask}
      ></Todos>

    </div>
  );
}
