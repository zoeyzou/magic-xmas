import * as React from "react";
import "./Display.scss";
import Frame from "../../components/Frame/Frame";
import Title from "../../components/Title/Title";
import { getIcons } from "../../api/icon-fetch";
import RandomSnowflake from "../RandomSnowflake/RandomSnowflake";

export interface DisplayProps {}

export type IconURLs = string[];
export type ScreenCoordinate = { [key: string]: number };

export interface DisplayState {
  iconURLs: IconURLs;
  snowflakesCount: number[];
  clickedCoordinates: ScreenCoordinate;
}

export default class Display extends React.Component<
  DisplayProps,
  DisplayState
> {
  private title: string = "Merry Christmas!";
  private subTitle: string =
    "This is a page made for a very very serious competition -- fight for the Rasberry PI!" +
    "\n" +
    "Also, magic things is that --  you can be the snow god! Try click on the screen and see!";
  private timer;
  constructor(props: DisplayProps) {
    super(props);

    this.state = {
      iconURLs: [],
      snowflakesCount: [],
      clickedCoordinates: { x: null, y: null }
    };

    this.generateNewSnowflake = this.generateNewSnowflake.bind(this);
    this.removeStaleSnowflake = this.removeStaleSnowflake.bind(this);
  }

  componentDidMount() {
    const data = getIcons();
    this.setState({ iconURLs: data });
  }

  private removeStaleSnowflake(key: number) {
    const newCounts = this.state.snowflakesCount.slice();
    newCounts.splice(key, 1);
    this.setState({ snowflakesCount: newCounts });
  }

  private generateNewSnowflake(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    const lastCount = this.state.snowflakesCount.slice().pop();
    const newCount = lastCount ? lastCount + 1 : 1;
    const newCounts = this.state.snowflakesCount.slice().concat([newCount]);
    this.setState({
      snowflakesCount: newCounts,
      clickedCoordinates: { x: event.clientX, y: event.clientY }
    });
  }

  public render() {
    const { iconURLs, snowflakesCount, clickedCoordinates } = this.state;

    return (
      <Frame>
        <div className="Display" onClick={this.generateNewSnowflake}>
          <Title title={this.title} subTitle={this.subTitle} />
          {snowflakesCount.map(count => (
            <RandomSnowflake
              iconURLs={iconURLs}
              key={count}
              removeStaleSnowflake={this.removeStaleSnowflake}
              coordinates={clickedCoordinates}
            />
          ))}
        </div>
      </Frame>
    );
  }
}
