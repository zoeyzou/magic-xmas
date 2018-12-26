import * as React from "react";
import "./Frame.scss";

interface FrameProps {}

const Frame: React.SFC<FrameProps> = props => {
  return (
    <div className="Frame">
      <div className="top" />
      <div className="right" />
      <div className="bottom" />
      <div className="left" />
      {props.children}
    </div>
  );
};

export default Frame;
