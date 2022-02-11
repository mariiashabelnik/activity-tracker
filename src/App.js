import React from "react";
import { useState } from "react";

import "./App.css";
import ActivityList from "./components/ActivityList";
import InputBox from "./components/InputBox";
import Title from "./components/Title";

function App() {
  const [inputText, setInputText] = useState("");
  const [activities, setActivities] = useState([]);

  function createActivity() {
    const newActivity = {
      title: inputText,
      daysCompleted: [],
    };

    // take out today
    const today = new Date();
    // get date from day 0 of next month (last day of this month)
    const daysOfMonth = new Date(
      today.getFullYear(),
      today.getMonth() + 1,
      0
    ).getDate();

    for (let i = 1; i <= daysOfMonth; i++) {
      newActivity.daysCompleted.push({ done: false });
    }
    activities.push(newActivity);

    setActivities(activities);
    setInputText("");
  }

  function completeDay(activityId, dayId) {
    // make copy of list
    const newList = [...activities];
    // take out current status
    const status = newList[activityId].daysCompleted[dayId];
    status.done = !status.done;
    newList[activityId].daysCompleted[dayId] = status;

    setActivities(newList);
  }

  function removeActivity(activityId) {
    const newList = activities.filter((item, index) => {
      if (index === activityId) {
        return false;
      } else {
        return true;
      }
    });
    setActivities(newList);
  }

  return (
    <div className="App">
      <Title />
      <InputBox
        inputText={inputText}
        setInputText={setInputText}
        createActivity={createActivity}
        btnValue="Lagg till"
      />

      <div className="activityList">
        <ActivityList
          activities={activities}
          completeDay={completeDay}
          removeActivity={removeActivity}
        />
      </div>
    </div>
  );
}

export default App;
