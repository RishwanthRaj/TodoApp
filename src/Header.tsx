import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './style/Header.scss';

function Header() {
  return (
    <div className="header">
      <h1 className="header__title">Title</h1>
      <FontAwesomeIcon icon={["fas", "thumbtack"]} className="header__pinIcon" />
    </div>
  );
}

export default Header;