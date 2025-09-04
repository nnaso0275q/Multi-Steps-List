"use client";
import { Input } from "./input";
import { Button } from "./button";
import { FormHeader } from "./formHeader";
import { useState } from "react";
export const Step1 = ({ form, setForm, changeStep }) => {
  // Error messages
  const [errors, setErrors] = useState({});
  function handleContinue() {
    const newErrors = {};
    // First name error massage
    if (form.firstName === "") {
      newErrors.firstName =
        "First name cannot contain special characters or numbers.";
    } else {
      newErrors.firstName = "";
    }

    // Last name error massage
    if (form.lastName === "") {
      newErrors.lastName =
        "Last name cannot contain special characters or numbers.";
    } else {
      newErrors.lastName = "";
    }

    // User name error massage
    if (form.userName === "") {
      newErrors.userName =
        "User name cannot contain special characters or numbers.";
    } else {
      newErrors.userName = "";
    }

    setErrors(newErrors);

    if (!newErrors.firstName && !newErrors.lastName && !newErrors.userName) {
      changeStep("step2");
    }
  }

  console.log(errors);

  return (
    // Background style
    <div className=" pt-20 pl-[400px] bg-gray-200 w-full h-screen ">
      {/* Multi-Steps Box */}
      <div className="w-[480px] h-fit bg-[#FFFFFF] rounded-[8px] font-inter ml-[32px]   py-[32px]">
        <FormHeader></FormHeader>

        {/* First name */}
        <Input
          name="First name"
          type="text"
          value={form.firstName}
          onChange={(f) =>
            setForm({
              ...form,
              firstName: f.target.value,
            })
          }
        ></Input>
        {errors.firstName && (
          <div className="text-[#E14942] pl-[32px] font-normal inter text-[14px]">
            {errors.firstName}
          </div>
        )}

        {/* Last name */}
        <Input
          name="Last name"
          type="text"
          value={form.lastName}
          onChange={(f) =>
            setForm({
              ...form,
              lastName: f.target.value,
            })
          }
        ></Input>
        {errors.lastName && (
          <div className="text-[#E14942] pl-[32px] font-normal inter text-[14px]">
            {errors.lastName}
          </div>
        )}

        {/* User name */}
        <Input
          name="User name"
          type="text"
          value={form.userName}
          onChange={(f) =>
            setForm({
              ...form,
              userName: f.target.value,
            })
          }
        ></Input>
        {errors.userName && (
          <div className="text-[#E14942] pl-[32px] font-normal inter text-[14px]">
            {errors.userName}
          </div>
        )}

        {/* Continue Button */}
        <Button changeStep={handleContinue}></Button>
      </div>
    </div>
  );
};
