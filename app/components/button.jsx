export const Button = ({ variant, children, changeStep }) => {
  let classes = "inter rounded-[6px] font-medium ";
  
  if (variant === "firstBtn") {
    classes +=
      "w-[416px] h-[44px] mt-[78px]   size-[16px] bg-black text-white  ml-[32px] hover:shadow-xl/30 hover:shadow-gray-600 hover:duration-[0.3s]";
  } else if (variant === "secondBtn") {
    classes +=
      "w-[128px] h-[44px]  border-[1px] border-[#CBD5E1] text-black  hover:border hover:shadow-xl/30 hover:shadow-gray-600  hover:duration-[0.3s]";
  }
  if (variant === "thirdBtn") {
    classes +=
      "w-[280px] h-[44px]  bg-black text-white  hover:shadow-xl/30 hover:shadow-gray-600 hover:duration-[0.3s]";
  }

  return (
    <button onClick={changeStep} className={classes}>
      {children}
    </button>
  );
};
