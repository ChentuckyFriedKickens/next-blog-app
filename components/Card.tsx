import React from "react";

const Card = (props: any) => {
  return (
    <div className={`card ${props.classes}`}>
      <h3 className="pb-4">{props.name}</h3>
      <p>{props.text}</p>
    </div>
  );
};

export default Card;
