"use client";
// import { Input, FormHeader } from "./components";
import { Input } from "./input";
import { FormHeader } from "./formHeader";
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
          onChange={(f) =>
            setForm({
              ...form,
              email: f.target.value,
            })
          }
        ></Input>
        {errors.email && (
          <div className="text-[#E14942] pl-[32px] font-normal inter text-[14px]">
            {errors.email}
          </div>
        )}

        {/* Phone number */}
        <Input
          name="Phone number"
          type="text"
          value={form.phoneNumber}
          onChange={(f) =>
            setForm({
              ...form,
              phoneNumber: f.target.value,
            })
          }
        ></Input>
        {errors.phoneNumber && (
          <div className="text-[#E14942] pl-[32px] font-normal inter text-[14px]">
            {errors.phoneNumber}
          </div>
        )}

        {/* Password */}
        <Input
          name="Password"
          type="password"
          value={form.password}
          onChange={(f) =>
            setForm({
              ...form,
              password: f.target.value,
            })
          }
        ></Input>
        {errors.password && (
          <div className="text-[#E14942] pl-[32px] font-normal inter text-[14px]">
            {errors.password}
          </div>
        )}

        {/* Confirm password */}
        <Input
          name="Confirm password"
          type="password"
          value={form.confirmPassword}
          onChange={(f) =>
            setForm({
              ...form,
              confirmPassword: f.target.value,
            })
          }
        ></Input>
        {errors.confirmPassword && (
          <div className="text-[#E14942] pl-[32px] font-normal inter text-[14px]">
            {errors.confirmPassword}
          </div>
        )}
        {/* Continue Button */}

        <div className="gap-2 flex pl-[32px] pt-[70px]">
          <button
            className="w-[128px] h-[44px] rounded-[6px] border-[1px] border-[#CBD5E1] text-black  hover:border hover:shadow-xl/30 hover:shadow-gray-600  hover:duration-[0.3s]"
            onClick={() => changeStep("step1")}
          >
            Back
          </button>
          <button
            className="w-[280px] h-[44px] rounded-[6px]  bg-black text-white  hover:shadow-xl/30 hover:shadow-gray-600 hover:duration-[0.3s]"
            onClick={secondContinue}
          >
            Continue 2/3
          </button>
        </div>
      </div>
    </div>
  );
};
