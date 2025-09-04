export const Calendar = ({ value, onChange }) => {
  return (
    <div className="text-[#334155] font-semibold pl-[32px] ">
      Date of Birth<span className="text-red-600"> *</span>
      <input
        value={value}
        onChange={onChange}
        className="w-[416px] h-[44px] border border-gray-300 text-black inter font-normal pl-[8px] rounded-[8px]"
        type="date"
      />
    </div>
  );
};
