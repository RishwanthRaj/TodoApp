import React from "react";
import Header from "./Header";
import './style/general.scss';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas, faThumbtack } from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";
import Todo from "./Todo";

library.add(fas, faThumbtack);

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Todo></Todo>
      <div className="space"></div>
      <Footer></Footer>
    </div>
  );
}

export default App;
