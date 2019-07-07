import React from "react";
import "./Video.css";

const Video = props => {

  return (
    <div className="Video__Wrapper">
      <iframe title="Inline Frame Example" src={props.youtubeLink} />
    </div>
  );
};

export default Video;
