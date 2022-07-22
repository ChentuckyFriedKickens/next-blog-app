import React from "react";

const Card = (props: any) => {
  return (
    <div className={`card ${props.classes}`}>
      <h3 className="pb-4">{props.name + " →"}</h3>
      <p>
        {props.text ||
          `
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
      explicabo fuga. Officia architecto placeat quisquam commodi quam maxime
      pariatur cumque, ea enim rerum similique laudantium optio adipisci ratione
      illo possimus?`}
      </p>
    </div>
  );
};

export default Card;
