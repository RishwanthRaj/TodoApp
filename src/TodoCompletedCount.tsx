import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type props = {
  completedSize: number;
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

const TodoCompletedCount = ({ completedSize, visible, setVisible }: props) => {

  if (completedSize === 1)
    return (
      <div className="todo__completedCount" >
        <FontAwesomeIcon icon={["fas", "chevron-down"]} className="downArrow" onClick={() => setVisible(!visible)} />
        <span>{completedSize} Completed Item</span>
      </div>
    )
  else if (completedSize > 1)
    return (
      <div className="todo__completedCount" >
        <FontAwesomeIcon icon={["fas", "chevron-down"]} className="downArrow" onClick={() => setVisible(!visible)} />
        <span >{completedSize} Completed Items</span>
      </div>
    )
  else
    return (
      <div></div>
    )
}

export default TodoCompletedCount;