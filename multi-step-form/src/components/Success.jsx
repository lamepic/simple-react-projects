import React from "react";

function Success({ values }) {
  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-bold">Your Info</h1>
      <div className="space-y-1">
        <p>First Name: {values.firstName}</p>
        <p>Last Name: {values.lastName}</p>
        <p>Age: {values.age}</p>
        <p>country: {values.country}</p>
        <p>city: {values.city}</p>
        <p>zip: {values.zip}</p>
      </div>
    </div>
  );
}

export default Success;
