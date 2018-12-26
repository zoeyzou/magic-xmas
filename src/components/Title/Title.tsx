import * as React from "react";
import "./Title.scss";

interface TitleProps {
  title: string;
  subTitle?: string;
}

const Title: React.SFC<TitleProps> = props => {
  return (
    <div className="Title">
      <h1>{props.title}</h1>
      <p>{props.subTitle}</p>
    </div>
  );
};

export default Title;
