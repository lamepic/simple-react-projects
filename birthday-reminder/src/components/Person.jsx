import React from "react";

function Person({ name, age, image }) {
  return (
    <div className="person">
      <div className="img">
        <img src={image} alt={name} />
      </div>
      <div>
        <p className="name">{name}</p>
        <p className="age">{age} years</p>
      </div>
    </div>
  );
}

export default Person;
