import React from "react";
import "./card-style.css";

interface IProp {
  image: string;
}

export function Card({ image }: IProp) {
  return (
    <div className="card">
      <div className="header">Card Header</div>
      <div
        className="media"
        style={{
          backgroundImage: `url(${image})`
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
