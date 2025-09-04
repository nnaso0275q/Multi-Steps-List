"use client";
// import { FormHeader, InputCalendar } from "./components"
import { FormHeader } from "./formHeader";
import { Calendar } from "./calendar";
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
          {/* <AddImage></AddImage> */}
        </div>

        {/* Continue Button */}
        <div className="gap-2 flex pl-[32px] pt-[82px]">
          <button
            className="w-[128px] h-[44px] rounded-[6px]  border-[1px] border-[#CBD5E1] text-black hover:border hover:shadow-xl/30 hover:shadow-gray-600 hover:duration-[0.3s]"
            onClick={() => changeStep("step2")}
          >
            Back
          </button>
          <button
            className="w-[280px] h-[44px] rounded-[6px]  bg-black text-white hover:shadow-xl/30 hover:shadow-gray-600 hover:duration-[0.3s]"
            onClick={() => changeStep("step4")}
          >
            Continue 3/3
          </button>
        </div>
      </div>
    </div>
  );
};
