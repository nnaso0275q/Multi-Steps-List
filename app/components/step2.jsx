"use client";
// import { Input, FormHeader } from "./components";
import { Input } from "./input";
import { FormHeader } from "./formHeader";
import { Button } from "./button";
import { useState } from "react";
export const Step2 = ({ form, setForm, changeStep }) => {
  //   Error messages
  const [errors, setErrors] = useState({});
  function secondContinue() {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{8}$/;

    // Email error massage
    if (emailRegex.test(form.email)) {
      newErrors.email = "";
    } else {
      newErrors.email = "Please provide a valid email address.";
    }

    // Phone number error massage
    if (phoneRegex.test(form.phoneNumber)) {
      newErrors.phoneNumber = "";
    } else {
      newErrors.phoneNumber = "Please enter a valid phone number.";
    }

    // Password error massage
    if (form.password === "") {
      newErrors.password = "Password must include letters and numbers.";
    } else {
      newErrors.password = "";
    }

    // Confirm password error massage
    if (form.confirmPassword === "") {
      newErrors.confirmPassword = "Passwords do not match. Please try again.";
    } else {
      newErrors.confirmPassword = "";
    }

    setErrors(newErrors);

    if (
      !newErrors.email &&
      !newErrors.phoneNumber &&
      !newErrors.password &&
      !newErrors.confirmPassword
    ) {
      changeStep("step3");
    }
  }

  console.log(errors);

  return (
    // Background style
    <div className=" pt-20 pl-[400px] bg-gray-200 w-full h-screen ">
      {/* Multi-Steps Box */}
      <div className="w-[480px] h-fit bg-[#FFFFFF] rounded-[8px] font-inter py-[32px]">
        <FormHeader />

        {/* Email */}
        <Input
          name="Email"
          type="text"
          value={form.email}
          error={errors.email}
          onChange={(f) =>
            setForm({
              ...form,
              email: f.target.value,
            })
          }
        ></Input>

        {/* Phone number */}
        <Input
          name="Phone number"
          type="text"
          value={form.phoneNumber}
          error={errors.phoneNumber}
          onChange={(f) =>
            setForm({
              ...form,
              phoneNumber: f.target.value,
            })
          }
        ></Input>

        {/* Password */}
        <Input
          name="Password"
          type="password"
          value={form.password}
          error={errors.password}
          onChange={(f) =>
            setForm({
              ...form,
              password: f.target.value,
            })
          }
        ></Input>

        {/* Confirm password */}
        <Input
          name="Confirm password"
          type="password"
          value={form.confirmPassword}
          error={errors.confirmPassword}
          onChange={(f) =>
            setForm({
              ...form,
              confirmPassword: f.target.value,
            })
          }
        ></Input>

        {/* Continue Button */}
        <div className="gap-2 flex pl-[32px] pt-[70px]">
          <Button changeStep={() => changeStep("step1")} variant="secondBtn">
            Back
          </Button>
          <Button changeStep={secondContinue} variant="thirdBtn">
            Continue 2/3
          </Button>
        </div>
      </div>
    </div>
  );
};
