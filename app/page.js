"use client";
// Multi-Steps List
import { Step1, Step2, Step3, Step4 } from "./components";
import { useState } from "react";

const Multi = () => {
  const [step, setStep] = useState("step1");
  const changeStep = (nextStep) => setStep(nextStep);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  console.log(form);

  // STEP-1
  if (step === "step1") {
    return (
      <Step1 form={form} setForm={setForm} changeStep={changeStep}></Step1>
    );
  }

  // STEP-2
  if (step === "step2") {
    return (
      <Step2 form={form} setForm={setForm} changeStep={changeStep}></Step2>
    );
  }

  // STEP-3
  if (step === "step3") {
    return <Step3 changeStep={changeStep}></Step3>;
  }

  // STEP-4
  if (step === "step4") {
    return <Step4></Step4>;
  }
};
export default Multi;
