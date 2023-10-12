import React from "react";

class DefaultLayout extends React.Component {
  render() {
    return (
      <>
        {/* Any global styles should be included in your root component or App component, not here */}
        <nav>
          <ul className="nav-links">
            <li><a href="/" className="nav-link">Captain's Profile</a></li>
            <li><a href="/logs/Index" className="nav-link">View Logs</a></li>
            <li><a href="/logs/NewLogs" className="nav-link">New Entry</a></li>
          </ul>
        </nav>      
        <main>
          {this.props.children}
        </main>
      </>
    );
  }
}

export default DefaultLayout;
