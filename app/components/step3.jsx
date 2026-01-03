"use client";
import { FormHeader } from "./formHeader";
import { Calendar } from "./calendar";
import { Button } from "./button";
import { AddImage } from ".";
export const Step3 = ({ changeStep }) => {
  return (
    // Background style
    <div className=" pt-20 pl-[400px] bg-gray-200 w-full h-screen ">
      {/* Multi-Steps Box */}
      <div className="w-[480px] h-fit bg-[#FFFFFF] rounded-[8px] font-inter py-[32px]">
        <FormHeader></FormHeader>

        <Calendar></Calendar>

        {/* Profile image */}
        <div className="text-[#334155] pl-[32px] font-semibold pt-[12px]">
          Profile image<span className="text-red-600"> *</span>
          <AddImage></AddImage>
        </div>

        {/* Continue Button */}
        <div className="gap-2 flex pl-[32px] pt-[70px]">
          <Button changeStep={() => changeStep("step2")} variant="secondBtn">
            Back
          </Button>
          <Button changeStep={() => changeStep("step4")} variant="thirdBtn">
            Continue 3/3
          </Button>
        </div>
      </div>
    </div>
  );
};
