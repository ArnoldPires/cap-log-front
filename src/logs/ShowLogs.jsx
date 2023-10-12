import React from "react";
import DefaultLayout from "../layouts/DefaultLayout.jsx";
import moment from "moment";

class ShowLogs extends React.Component {
  render() {
    const { log } = this.props; // Access log from props
    return (
      <DefaultLayout>
        <article className="log-entry">
          <div className="cap">
            <div>
              <h2>{log.title}</h2>
            </div>
            <div className="time-stamps">
              <p>{moment(log.createdAt, "MM/DD/YY").format("MM/DD/YY")}</p>
              <p>{moment(log.createdAt, "h:mm a").format("h:mm a")}</p>
            </div>
          </div>
          <p>Is the ship broken? {log.shipIsBroken ? "Yes" : "No"}</p>
          <div>{log.entry}</div>
          <section className="editNdelete">
            <a href={`/logs/${log._id}/edit`} role="button" className="btn-edit">Edit</a>
            <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
              <input type="submit" value="Delete" className="btn-delete" style={{ width: "auto" }} />
            </form>
          </section>
        </article>
      </DefaultLayout>
    );
  }
}

export default ShowLogs;