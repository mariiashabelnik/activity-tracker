import React from "react";
import Activity from "./Activity";

function ActivityList(props) {
  const list = props.activities.map((item, index) => {
    return (
      <Activity
        item={item}
        activityId={index}
        completeDay={props.completeDay}
        removeActivity={props.removeActivity}
      />
    );
  });

  return (
    <div>
      aktiviteter
      {list}
    </div>
  );
}

export default ActivityList;
