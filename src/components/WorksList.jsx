import React from "react";
import Works from "./Works";

const WorksList = ({ arr, setFilter, filter }) => {
  return (
    <>
      <br/>
      <br/>
      <br/>
      <br/>
      <input className="form-control" onChange={e=>{
        setFilter(e.target.value)
      }
      }/>
      <div className="launch-list">
          {arr
          .filter(work => work.description.toLowerCase().includes(filter.toLowerCase()))
          .map((work) => (
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
