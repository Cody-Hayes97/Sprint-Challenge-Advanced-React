import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { CardList } from "./components/CardList";
import { Nav } from "./components/navBar";

function App() {
  return (
    <div className="App">
      <Nav />
      <CardList />
    </div>
  );
}

export default App;
