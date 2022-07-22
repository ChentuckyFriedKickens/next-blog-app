import React from "react";

const Card = (props: any) => {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <p>{props.text}</p>
    </div>
  );
};

export default Card;
