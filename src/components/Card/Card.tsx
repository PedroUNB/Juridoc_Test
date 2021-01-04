import React from "react";
import "./card-style.css";

export function Card() {
  return (
    <div className="card">
      <div className="header">Card Header</div>
      <div
        className="media"
        style={{
          backgroundImage: `url(${"https://ichef.bbci.co.uk/news/976/cpsprodpb/27C9/production/_103158101_tha.jpg"})`
        }}
      />

      <div className="content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed felis
          pulvinar, fringilla ligula at, accumsan augue. Cras condimentum
          tincidunt urna sed pretium.
        </p>
      </div>
    </div>
  );
}
