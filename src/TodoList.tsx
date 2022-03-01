import React from "react";

type props = {
  todo: string[];
  completed: string[];
  completeTask: (item: string) => void;
}

const TodoList = ({ todo, completed, completeTask }: props) => {
  console.log(completed);
  return (
    <div className="todo__list">
      {todo.map((todoItem) => {
        if (todoItem !== "")
          return (
            <><ul><input type="checkbox" id={todoItem} name={todoItem} key={todoItem} onClick={() => completeTask(todoItem)} /><label htmlFor={todoItem}>{todoItem}</label></ul></>
          )
      }
      )}

    </div>
  );

}

export default TodoList;