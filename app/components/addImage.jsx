"use client";
import { useRef, useState } from "react";
export const AddImage = () => {
  const inputRef = useRef(null);
  const [preview, setPreview] = useState(null);

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setPreview(imageUrl);
  };

  return (
    <div className="pr-[32px] pt-[12px]">
      <div
        onClick={handleClick}
        className="w-full h-[180px] border border-dashed border-[#CBD5E1]
                   rounded-[8px] flex items-center justify-center
                   cursor-pointer bg-[#F8FAFC] overflow-hidden"
      >
        {preview ? (
          <img
            src={preview}
            alt="Profile preview"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex flex-col items-center text-[#475569]">
            <p className="pt-2 font-medium">Add image</p>
          </div>
        )}
      </div>

      {/* Hidden input */}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleImageChange}
      />
    </div>
  );
};
