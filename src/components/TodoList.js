import React, { useState, useCallback, useEffect } from "react";
import List from "./List";

function TodoList({ user }) {
  const [newTask, setNewTask] = useState("");
  const [todoList, setTodoList] = useState(user.todoList);

  const addTask = () => {
    setTodoList([
      ...todoList,
      {
        id: Date.now(),
        todo: newTask,
        isChecked: false,
      },
    ]);
    setNewTask("");
  };

  const deleteTask = useCallback((id) => {
    setTodoList((todoList) => todoList.filter((task) => task.id !== id));
  }, []);

  const changeCheckBoxStatus = useCallback((id) => {
    // const newTodoList =
    setTodoList((todoList) =>
      todoList.map((item) => {
        if (item.id === id) {
          const newItem = { ...item };
          newItem.isChecked = !item.isChecked;
          return newItem;
        }
        return item;
      })
    );
  }, []);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users"));
    users[user.userDetails.username].todoList = todoList;
    localStorage.setItem("users", JSON.stringify(users));
  }, [todoList]);

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Add</button>

      <List
        list={todoList}
        deleteTask={deleteTask}
        changeCheckBoxStatus={changeCheckBoxStatus}
      />
    </div>
  );
}

export default TodoList;
