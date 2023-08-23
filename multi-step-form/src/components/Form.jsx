import React, { useState } from "react";
import UserInfo from "./UserInfo";
import Address from "./Address";
import Success from "./Success";

function Form() {
  const [step, setStep] = useState(1);
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    age: "",
    country: "",
    city: "",
    zip: "",
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleFormChange = (input) => (e) => {
    setUserInfo({ ...userInfo, [input]: e.target.value });
  };

  switch (step) {
    case 1:
      return (
        <div className="bg-white py-10 p-5 w-5/12 min-h-[15rem]">
          <UserInfo
            values={userInfo}
            nextStep={nextStep}
            handleFormChange={handleFormChange}
          />
        </div>
      );
    case 2:
      return (
        <div className="bg-white py-10 p-5 w-5/12 min-h-[15rem]">
          <Address
            values={userInfo}
            nextStep={nextStep}
            prevStep={prevStep}
            handleFormChange={handleFormChange}
          />
        </div>
      );
    case 3:
      return (
        <div className="bg-white py-10 p-5 w-5/12 min-h-[15rem]">
          <Success values={userInfo} />
        </div>
      );
  }
}

export default Form;
