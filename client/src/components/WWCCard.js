import React from "react";

export const WWCCard = props => {
  return (
    <div className="WWC-Card">
      <p>
        <strong>Name:</strong> {props.name}
      </p>
      <p>
        <strong>Country:</strong> {props.country}
      </p>
      <p>
        <strong>Number of Searches:</strong> {props.searches}
      </p>
      <br />
      <br />
    </div>
  );
};
