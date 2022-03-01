import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, KeyboardEvent, useEffect } from "react";
import TodoList from "./TodoList";
import './style/Todo.scss';
import TodoCompleted from "./TodoCompleted";
import TodoCompletedCount from "./TodoCompletedCount";

function Todo() {

  const [todos, setTodos] = useState([""]);
  const [completed, setCompleted] = useState([""]);
  const [completedSize, setCompletedSize] = useState(0);
  const [visible, setVisible] = useState(true);


  const completeTask = (item: string) => {
    for (let i = 0; i < todos.length; i++) {
      if (todos[i] === item) {
        todos.splice(i, 1);
        setTodos(todos);
        let _completed = [...completed];
        _completed.push(item);
        setCompleted(_completed);
        setCompletedSize(completedSize + 1);
        let today = new Date();
        let time = today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
        let timeSpot = document.getElementsByClassName('footer__editTime')[0];
        timeSpot.innerHTML = `<div class= "footer__editTime">Edited ${time}</div>`;
      }
    }
  }


  const restartTask = (item: string) => {
    for (let i = 0; i < completed.length; i++) {
      if (completed[i] === item) {
        completed.splice(i, 1);
        setCompleted(completed);
        let _todos = [...todos];
        _todos.push(item);
        setTodos(_todos);
        setCompletedSize(completedSize - 1);
        let today = new Date();
        let time = today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
        let timeSpot = document.getElementsByClassName('footer__editTime')[0];
        timeSpot.innerHTML = `<div class= "footer__editTime">Edited ${time}</div>`;
      }
    }
  }

  const addTodo = (e: KeyboardEvent): void => {
    let inputValue = (document.getElementsByClassName("todo__addItem")[0] as HTMLInputElement).value;
    let _todos = [...todos];
    if (e.key === 'Enter') {
      if (todos.includes(inputValue) || (inputValue === '') || completed.includes(inputValue)) {
        alert('already exists');
      }
      else {
        _todos.push(inputValue);
        setTodos(_todos);
      }
      (document.getElementsByClassName("todo__addItem")[0] as HTMLInputElement).value = '';
      let today = new Date();
      let time = today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
      let timeSpot = document.getElementsByClassName('footer__editTime')[0];
      timeSpot.innerHTML = `<div class= "footer__editTime">Edited ${time}</div>`;
    }
  };

  return (
    <div className="todo">
      <TodoList todo={todos} completed={completed} completeTask={completeTask}></TodoList>
      <div className="todo__add">
        <FontAwesomeIcon icon={["fas", "plus"]} className="todo__addIcon" />
        <input type="text" placeholder="List item" className="todo__addItem" onKeyDown={addTodo} />
      </div>
      <TodoCompletedCount completedSize={completedSize} visible={visible} setVisible={setVisible}></TodoCompletedCount>
      <TodoCompleted completed={completed} restartTask={restartTask} visible={visible}></TodoCompleted>
    </div>
  );
}

export default Todo;