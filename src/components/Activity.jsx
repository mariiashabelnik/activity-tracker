import React from "react";

function Activity(props) {
  const days = props.item.daysCompleted.map((item, index) => {
    const day = index + 1;
    let className;
    if (item.done === true) {
      className = "oneDay done";
    } else {
      className = "oneDay notDone";
    }
    return (
      <div
        className={className}
        onClick={() => {
          props.completeDay(props.activityId, index);
        }}
      >
        {day}
      </div>
    );
  });

  return (
    <div className="oneActivity">
      <div className="activityTitle">
        <h1>{props.item.title}</h1>
      </div>
      <div className="activityDays">{days}</div>
      <div
        className="remove"
        onClick={() => {
          props.removeActivity(props.activityId);
        }}
      >
        X
      </div>
    </div>
  );
}

export default Activity;
