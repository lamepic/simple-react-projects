import React from "react";

function Address({ values, handleFormChange, nextStep, prevStep }) {
  const gotoNextStep = () => {
    nextStep();
  };

  const gotoPrevStep = () => {
    prevStep();
  };

  return (
    <div className="space-y-5">
      <div className="flex flex-col">
        <label>Country</label>
        <input
          name="country"
          value={values.country}
          className="border outline-none border-black p-1"
          onChange={handleFormChange("country")}
        />
      </div>
      <div className="flex flex-col">
        <label>City</label>
        <input
          name="city"
          value={values.city}
          className="border outline-none border-black p-1"
          onChange={handleFormChange("city")}
        />
      </div>
      <div className="flex flex-col">
        <label>Zip</label>
        <input
          name="zip"
          value={values.zip}
          className="border outline-none border-black p-1"
          onChange={handleFormChange("zip")}
        />
      </div>

      <div className="space-x-1 text-white">
        <button onClick={gotoPrevStep} className="bg-green-700 p-2 rounded-md">
          back
        </button>
        <button onClick={gotoNextStep} className="bg-green-700 p-2 rounded-md">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Address;
