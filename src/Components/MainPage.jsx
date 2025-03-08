import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import "../style/MainPage.css";

function MainPage({ tasks, setTasks }) {
  const navigate = useNavigate();

  // Handle deleting a task
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task, index) => index !== id);
    setTasks(updatedTasks);
  };

  // Handle editing (future functionality)
  const editTask = (id) => {
    alert("Edit functionality coming soon!"); // You can later implement an edit form here
  };

  return (
    <div className="main-container">
      <h1 className="title">React To-Do List</h1>

      {/* Button to Navigate to AddToDo Page */}
      <div className="button-container">
        <button className="add-button" onClick={() => navigate("/add-todo")}>
          Add a new to-do
        </button>
      </div>

      {/* Task Table */}
      <div className="table-container">
        <table className="task-table">
          <thead>
            <tr>
              <th>Task</th>
              <th>Description</th>
              <th>Category</th>
              <th>When</th>
              <th>Priority</th>
              <th>Fulfillment</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index}>
                <td>{task.task}</td>
                <td>{task.description}</td>
                <td>{task.category}</td>
                <td>{task.when}</td>
                <td>{task.priority}</td>
                <td>{task.fulfillment}%</td>
                <td>
                  <button className="edit-button" onClick={() => editTask(index)}>
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button className="delete-button" onClick={() => deleteTask(index)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MainPage;
