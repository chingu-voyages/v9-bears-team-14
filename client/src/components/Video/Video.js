import React, { useState, useEffect } from "react";
// import axios from "axios";
// import ErrorMessage from "./ErrorMessage";
// import LoadMessage from "./LoadMessage";
import "./Video.css";

const Video = props => {

  return (
    <div className="Video__Wrapper">
      <iframe title="Inline Frame Example" src={props.youtubeLink} />
    </div>
  );
};

export default Video;
