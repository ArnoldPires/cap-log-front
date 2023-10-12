import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import moment from "moment";

class Index extends React.Component {
  render() {
    const { logs } = this.props;

    // Check if 'logs' is available and is an array before trying to map over it
    const logEntries = Array.isArray(logs) ? logs.map((log, index) => {
      return (
        <div className="log-entry" key={index}>
          <div className="cap">
            <div>
              <a className="log-link" href={`/logs/${log._id}`}>
                <h3>{log.title}</h3>
              </a>
              <p>Is the ship broken? {log.shipIsBroken ? "Yes" : "No"}</p>
            </div>
            <div className="time-stamps">
              <p>{moment(log.createdAt).format("MM/DD/YY")}</p> {/* Adjusted this line */}
              <p>{moment(log.createdAt).format("h:mm a")}</p> {/* Adjusted this line */}
            </div>
          </div>
        </div>
      );
    }) : <p>Loading logs or no logs available...</p>; // Display a message if 'logs' is undefined or not an array

    return (
      <DefaultLayout>
        <div className="index-container">
          <h1>Captain Log Entries</h1>
          <div className='image-container'>
            <img src="/captainslog.jpg" alt="Captain's Log" />
          </div>
          {logEntries}
        </div>
      </DefaultLayout>
    );
  }
}

export default Index;