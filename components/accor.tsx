import React from "react";

type AccordianUIProps = {
  title: string;
  children: JSX.Element;
  Id: number;
  Index: number;
  setIndex: number;
};

const AccordionUI = ({
  title,
  children,
  Id,
  Index,
  setIndex,
}: AccordianUIProps) => {
  return (
    <div className="body">
      <div className="accordion">
        <div style={{ marginBottom: "20px" }}>
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
