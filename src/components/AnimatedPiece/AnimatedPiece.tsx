import * as React from "react";
import "./AnimatedPiece.scss";

interface AnimatedPieceProps {
  img: string;
  positionX: number;
  positionY: number;
}

class AnimatedPiece extends React.Component<AnimatedPieceProps, {}> {
  render() {
    return (
      <div
        className="AnimatedPiece"
        style={{
          top: `${this.props.positionY}px`,
          left: `${this.props.positionX}px`
        }}
      >
        <img alt="animated components" src={this.props.img} />
      </div>
    );
  }
}

export default AnimatedPiece;
