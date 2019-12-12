import React from "react"
import styled from "styled-components"

const Tripod = styled.line`
  fill: none;
  stroke: coral;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 24px;
`

const Telescope = styled.polyline`
  fill: none;
  stroke: coral;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 18px;
`

const Shine = styled.line`
  fill: none;
  stroke: #000;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 12px;
`

const BorderCircle = styled.circle`
  fill: none;
  stroke: coral;
  stroke-miterlimit: 10;
  stroke-width: 54px;
`

class IdeaUpAstronomyIcon extends React.Component {
  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 876.22 876.22"
        className={this.props.className}
        id={this.props.id}
        data-name="IdeaUP Astronomy Icon"
      >
        <title>Astronomy Category</title>
        <g
          id="idea-up-astronomy-icon-label"
          data-name="IdeaUP Astronomy Icon Label"
        >
          <Tripod
            className="idea-up-astronomy-icon-tripod icon-label"
            x1="313.91"
            y1="754.67"
            x2="441.16"
            y2="486.45"
            points="440.66 785.49 441.16 486.45"
          />
          <Tripod
            className="idea-up-astronomy-icon-tripod icon-label"
            x1="440.66"
            y1="785.49"
            x2="441.16"
            y2="486.45"
            points="440.66 785.49 441.16 486.45"
          />
          <Tripod
            className="idea-up-astronomy-icon-tripod icon-label"
            x1="567.41"
            y1="754.67"
            x2="441.16"
            y2="486.45"
            points="440.66 785.49 441.16 486.45"
          />
          <Telescope
            className="idea-up-astronomy-icon-telescope icon-label"
            points="603.27 146.92 696.39 265.76 550.42 380.13 536.05 361.79 224.24 606.1 208.67 586.23 161.29 623.35 142.13 598.89 147.22 605.39 128.06 580.93 175.44 543.81 159.87 523.94 471.68 279.63 457.31 261.29 603.27 146.92 696.39 265.76"
          />
          <Shine
            className="idea-up-astronomy-icon-shine icon-label icon-shine"
            x1="603.17"
            y1="187.34"
            x2="544.91"
            y2="233.01"
          />
          <Shine
            className="idea-up-astronomy-icon-shine icon-label icon-shine"
            x1="530.61"
            y1="244.04"
            x2="526.08"
            y2="247.65"
          />
        </g>
        <g
          id="idea-up-astronomy-icon-border"
          data-name="IdeaUP Astronomy Icon Border"
        >
          <BorderCircle
            className="idea-up-astronomy-border-circle icon-border"
            cx="438.11"
            cy="438.11"
            r="411.11"
          />
        </g>
      </svg>
    )
  }
}

export default IdeaUpAstronomyIcon
