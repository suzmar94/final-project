import React from "react";
import Works from "./Works";

const WorksList = ({ arr, setFilter, filter }) => {
  return (
    <>
      <div>
        <input className="form-control" onChange={e=>{
          setFilter(e.target.value)
        }
        }/>
        <div className="work-list mt-3">
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
      </div>
    </>
  );
};

export default WorksList;
