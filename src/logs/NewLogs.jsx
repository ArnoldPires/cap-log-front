import React from "react";
import { useNavigate } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";

function NewLogs() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // ... handle your form submission, maybe send a POST request via fetch or axios

    // After form submission is handled:
    navigate('/logs/Index'); // or whatever path you want to redirect to
  };
    return (
      <DefaultLayout>
        <div className="new-logs-container">
          <h2>Add an entry</h2>
          <form onSubmit={handleSubmit} action="/logs/Index" method="POST">
            <div className="form-group">
              <label htmlFor="title">Title of Log:</label>
              <input type="text" id="title" name="title" />
            </div>
            <div className="form-group">
              <label htmlFor="entry">Log Entry:</label>
              <textarea id="entry" name="entry" rows="10"></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="shipIsBroken">Is the Ship Broken?</label>
              <input type="checkbox" id="shipIsBroken" name="shipIsBroken" />
            </div>
            <div className="form-group">
              <input type="submit" value="Create Log" className="btn-outline"/>
            </div>
          </form>
        </div>
      </DefaultLayout>
    );
  }

export default NewLogs;