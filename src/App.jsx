import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import AddToDo from "./components/AddToDo";

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage tasks={tasks} setTasks={setTasks} />} />
        <Route path="/add-todo" element={<AddToDo addTask={(task) => setTasks([...tasks, task])} />} />
      </Routes>
    </Router>
  );
}

export default App;
