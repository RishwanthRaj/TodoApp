import React from "react";

type props = {
  completed: string[];
  restartTask: (item: string) => void;
  visible: boolean;
}

const TodoCompleted = ({ completed, restartTask, visible }: props) => {
  return (
    <div className="todo__completed" style={{ display: visible ? 'block' : 'none' }}>
      {completed.map((completedItem) => {
        if (completedItem !== '')
          return (
            <><ul><input type="checkbox" id={completedItem} name={completedItem} defaultChecked key={completedItem} onClick={() => restartTask(completedItem)} /><label htmlFor={completedItem}>{completedItem}</label></ul></>)
      })}
    </div>
  );

}

export default TodoCompleted;