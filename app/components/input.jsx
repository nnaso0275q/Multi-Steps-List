export const Input = ({ name, value, onChange, type, error }) => {
  return (
    <div className="text-[#334155] text-[14px] font-semibold pl-[32px] pt-[12px] ">
      {name}
      <span className="text-red-600"> *</span>
      <input
        value={value}
        onChange={onChange}
        type={type}
        className={`w-[416px] h-[44px] text-[16px] border border-gray-300 font-normal text-black pl-[8px] rounded-[8px] ${
          error ? "border border-red-400  " : ""
        } `}
        placeholder="Placeholder"
      />
      {error && (
        <div className="text-[#E14942]  font-normal inter text-[14px]">
          {error}
        </div>
      )}
    </div>
  );
};
