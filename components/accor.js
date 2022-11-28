import React from "react";
import { HiArrowCircleDown, HiX } from "react-icons/hi";

const AccordionUI = ({ title, children, Id, Index, setIndex }) => {
  const handleSetIndex = (Id) => Index !== Id && setIndex(Id);

  return (
 <div className="body">
    <div className="accordion">
      <div
        onClick={() => handleSetIndex(Id)}
        >
        <div className="flex group cursor-pointer">
          <div className="frontacc">
            {title}
          </div>
        </div>
        <div className='icon'>
          {Index !== Id ? (
            <HiArrowCircleDown className="w-6 h-6 group-hover:text-white text-pink-600" />
          ) : (
            <HiX className="w-6 h-6 group-hover:text-white text-pink-600" />
          )}
        </div>
      </div>
      

      {Index === Id && (
        <div className="textboxx">
          {children}
        </div>
      )}
    </div>
    </div>
  );
};

export default AccordionUI;