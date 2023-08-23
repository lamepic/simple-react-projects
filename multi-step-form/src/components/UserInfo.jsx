import React from "react";

function UserInfo({ values, handleFormChange, nextStep }) {
  const gotoNextStep = () => {
    nextStep();
  };
  return (
    <div className="space-y-5">
      <div className="flex flex-col">
        <label>First Name</label>
        <input
          name="firstName"
          value={values.firstName}
          className="border outline-none border-black p-1"
          onChange={handleFormChange("firstName")}
        />
      </div>
      <div className="flex flex-col">
        <label>Last Name</label>
        <input
          name="lastName"
          value={values.lastName}
          className="border outline-none border-black p-1"
          onChange={handleFormChange("lastName")}
        />
      </div>
      <div className="flex flex-col">
        <label>Age</label>
        <input
          name="age"
          value={values.age}
          className="border outline-none border-black p-1"
          onChange={handleFormChange("age")}
        />
      </div>

      <div>
        <button
          onClick={gotoNextStep}
          className="bg-green-700 text-white p-2 rounded-md"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default UserInfo;
