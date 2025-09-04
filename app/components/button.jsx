export const Button = ({ changeStep }) => {
  return (
    <button
      onClick={() => changeStep("step2")}
      className="w-[416px] h-[44px] mt-[78px]  rounded-[6px] inter font-medium size-[16px] bg-black text-white  ml-[32px] hover:shadow-xl/30 hover:shadow-gray-600 hover:duration-[0.3s]"
    >
      Continue 1/3
    </button>
  );
};
