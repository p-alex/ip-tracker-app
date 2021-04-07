import React from "react";
import "./DataDisplay.scss";
export default function DataDisplay() {
  return (
    <main className="data">
      <div className="data-container">
        <p>IP ADDRESS</p>
        <h1>192.212.174.101</h1>
      </div>
      <div className="data-container">
        <p>LOCATION</p>
        <h1>Brooklyn, NY 10001</h1>
      </div>
      <div className="data-container">
        <p>TIMEZONE</p>
        <h1>UTC -05:00</h1>
      </div>
      <div className="data-container">
        <p>ISP</p>
        <h1>SpaceX Starlink</h1>
      </div>
    </main>
  );
}
