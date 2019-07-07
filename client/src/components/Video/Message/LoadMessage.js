import React from "react";
import LoadSpinner from "../../LoadingSpinner/LoadSpinner";
import "./Message.css";
const LoadMessage = () => {
  return (
    <div className="Video__Wrapper--Message">
      <div className="Video--Message">
        <LoadSpinner color={"white"} message={"Loading your video"} />
      </div>
    </div>
  );
};

export default LoadMessage;
