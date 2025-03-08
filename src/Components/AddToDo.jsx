import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Toast, ToastContainer } from "react-bootstrap";
import "../style/AddToDo.css";

function AddToDo({ addTask }) {
  const navigate = useNavigate();

  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("");
  const [description, setDescription] = useState("");
  const [fulfillment, setFulfillment] = useState(0);
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const [showToast, setShowToast] = useState(false);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a new task object
    const newTask = {
      task,
      priority,
      description,
      fulfillment: `${fulfillment}%`, // Ensure fulfillment is properly formatted
      category,
      when: date ? `${date} ${time}` : "-",
    };

    // Add the task to the list
    addTask(newTask);

    // Show success notification
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);

    // Clear the form
    setTask("");
    setPriority("");
    setDescription("");
    setFulfillment(0); // Reset fulfillment slider
    setCategory("");
    setDate("");
    setTime("");

    // Navigate back to the main page
    navigate("/");
  };

  return (
    <div className="container bg-light rounded p-4 shadow-lg position-relative">
      {/* Toast Notification */}
      <ToastContainer position="top-end" className="p-3">
        <Toast show={showToast} onClose={() => setShowToast(false)} delay={3000} autohide bg="success">
          <Toast.Header>
            <strong className="me-auto">Success</strong>
          </Toast.Header>
          <Toast.Body>Task has been successfully saved!</Toast.Body>
        </Toast>
      </ToastContainer>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <h2 className="mb-3 text-center">Add a new to-do</h2>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Task Name"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Priority</label>
            <select
              className="form-control"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              required
            >
              <option value="">Select priority</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          <div className="col-12 mb-3">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              rows="3"
              placeholder="A short description of the task"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Category</label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Household, School, Work"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Fulfillment</label>
            <input
              type="range"
              className="form-range"
              min="0"
              max="100"
              value={fulfillment}
              onChange={(e) => setFulfillment(e.target.value)}
            />
            <span>{fulfillment}%</span>
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Date</label>
            <input
              type="date"
              className="form-control"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Time</label>
            <input
              type="time"
              className="form-control"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>

          <div className="d-flex justify-content-between mt-3">
            <button className="btn btn-primary px-5" type="submit">
              Save
            </button>
            <button className="btn btn-outline-secondary px-5" type="button" onClick={() => navigate("/")}>
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddToDo;
