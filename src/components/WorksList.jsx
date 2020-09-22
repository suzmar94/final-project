import React from "react";
import Works from "./Works";

const WorksList = ({ arr }) => {
  return (
    <>
      <div className="launch-list">
          {arr.map((work) => (
            <Works
              key={work.id}
              title={work.title}
              description={work.description}
            />
          ))}
      </div>
    </>
  );
};

export default WorksList;
