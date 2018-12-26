import * as React from "react";
import { IconURLs, ScreenCoordinate } from "../Display/Display";
import AnimatedPiece from "../../components/AnimatedPiece/AnimatedPiece";

export interface RandomSnowflakeProps {
  iconURLs: IconURLs;
  key: number;
  coordinates: ScreenCoordinate;
  removeStaleSnowflake: (key: number) => void;
}

export default class RandomSnowflake extends React.Component<
  RandomSnowflakeProps,
  any
> {
  private randomNumber: number;
  private timer;
  private coordinates: ScreenCoordinate;
  constructor(props) {
    super(props);
    this.randomNumber = this.getRandomNumber(this.props.iconURLs.length);
    this.coordinates = this.props.coordinates;
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      clearInterval(this.timer);
      this.props.removeStaleSnowflake(this.props.key);
    }, 10000);
  }

  private getRandomNumber(maxNumber): number {
    return Math.floor(Math.random() * maxNumber);
  }

  public render() {
    return (
      <AnimatedPiece
        key={this.props.key}
        img={this.props.iconURLs[this.randomNumber]}
        positionX={this.coordinates.x}
        positionY={this.coordinates.y}
      />
    );
  }
}
