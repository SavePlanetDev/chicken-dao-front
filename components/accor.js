import React from "react";
import { HiArrowCircleDown, HiX } from "react-icons/hi";

const AccordionUI = ({ title, children, Id, Index, setIndex }) => {
  

  return (
    <div className="body">
      <div className="accordion">
        <div style={{marginBottom: '20px'}}>
          <div className="flex group cursor-pointer">
            <div className="frontacc">{title}</div>
          </div>
         
        </div>

         <div className="textboxx">{children}</div>
      </div>
    </div>
  );
};

export default AccordionUI;
