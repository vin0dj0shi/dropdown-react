import React, { useState } from "react";
// import "./Dropdown.css"; // import your CSS file for styling

function DropDown({ items }) {
  const [selectedItem, setSelectedItem] = useState("");

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <>
      <div className="flex items-center justify-center w-fit top-44 absolute flex-col gap-y-8">
        <select
          className="form-select appearance-none block w-full px-3 pt-[0.3rem] sm:py-1.5 text-xs sm:text-base font-extrabold text-white bg-[#1c1c1c] rounded-lg transition ease-in-out m-0 focus:text-white focus:bg-[#1c1c1c] focus:outline-none min-h-[49px] min-w-[182px] max-xs:text-xs max-xs:min-w-[80px] max-xs:min-h-[30px] border-2 border-[#FDC012]"
          onChange={(e) => handleItemClick(e.target.value)}
        >
          <option value="" disabled selected>
            Select
          </option>
          {items.map((option) => {
            return (
              <option key={option.id} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </select>

        {selectedItem && selectedItem.length > 0 && (
          <span className="text-white">You Selected {selectedItem}</span>
        )}
      </div>
    </>
  );
}

export default DropDown;
